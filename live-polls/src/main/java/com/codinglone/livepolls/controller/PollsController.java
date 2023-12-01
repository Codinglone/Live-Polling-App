package com.codinglone.livepolls.controller;
import com.codinglone.livepolls.dto.VoteDTO;
import com.codinglone.livepolls.entity.Polls;
import com.codinglone.livepolls.service.PollsService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/polls")
public class PollsController {
    @Autowired
    private PollsService pollsService;


    @PostMapping("/add")
    public String addPoll(@RequestBody Polls poll){
        pollsService.addPoll(poll);

        return "successfully added poll";
    }

    @PutMapping("/vote/{id}")
    public ResponseEntity<String> vote(@PathVariable Integer id, @RequestBody VoteDTO voteDTO){
        try {
            // Retrieve the poll by ID from the database
            Polls poll = pollsService.getPollById(id);

            // Update the count for the voted option
            updateOptionCount(poll, voteDTO.getOptionName());

            // Save the updated poll in the database
            pollsService.updatePoll(id, poll);

            return ResponseEntity.ok("Vote recorded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error recording vote");
        }
    }

    @GetMapping
    public List<Polls> getPolls(){
        return pollsService.getPolls();
    }

    @GetMapping("/{id}")
    public Polls getPollById(@PathVariable Integer id){
        return pollsService.getPollById(id);
    }

    private void updateOptionCount(Polls poll, String optionName) {
        try {
            // Retrieve the options as a JSON array
            String optionsString = poll.getOptions();
            JSONArray optionsArray = new JSONArray(optionsString);

            // Find the option by name in the array
            for (int i = 0; i < optionsArray.length(); i++) {
                JSONObject option = optionsArray.getJSONObject(i);
                String currentOptionName = option.getString("name");

                if (currentOptionName.equals(optionName)) {
                    // Update the count for the voted option
                    int currentCount = option.getInt("count");
                    option.put("count", currentCount + 1);

                    // Increment totalVotes
                    poll.setTotalVotes(poll.getTotalVotes() + 1);

                    // Set the updated options back to the poll
                    poll.setOptions(optionsArray.toString());

                    // Log the changes for debugging
                    System.out.println("Initial Options: " + optionsString);
                    System.out.println("Modified Options: " + optionsArray.toString());
                    return;
                }
            }

            // If the option was not found, handle accordingly (throw an exception or log a message)
            System.out.println("Option not found: " + optionName);

        } catch (JSONException e) {
            // Log the exception for debugging
            e.printStackTrace();
        }
    }
}
