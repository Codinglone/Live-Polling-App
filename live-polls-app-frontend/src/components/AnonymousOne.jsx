import React from 'react'

const AnonymousOne = () => {
  return (
    <>
    <main className="flex flex-row w-full justify-between">
        <section
          id="sectionOne"
          className="w-full h-[100vh] flex justify-center items-center bg-[#0066F7]"
        >
          <div className="flex justify-center">
            <form>
              <div className="flex w-full justify-between bg-white rounded-full pl-28 pr-2 py-[4px]">
                <input
                  type="text"
                  className="w-[70%] text-left outline-none"
                  placeholder="Enter username *"
                />
                <button className="w-[16%] bg-[#0066F7] h-10 rounded-full"></button>
              </div>
            </form>
          </div>
        </section>
        </main>
    </>
  )
}

export default AnonymousOne