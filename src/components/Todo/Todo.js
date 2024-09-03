import React, {Component} from 'react'

export default class Todo extends Component {

    render() {
        return (
            // 'completed' class for completed todos
            <div
                className="flex justify-center items-center m-6 bg-white text-2xl transition ease-in delay-[.5ms] text-[#585757FF]">
                <li className="py-0 px-5 flex-1">Test</li>

                <button
                    className="bg-[#4464ADFF] text-white border-none p-4 cursor-pointer text-xl transition ease-in delay-[.2ms] hover:bg-[#4464ADFF] hover:text-white pointer-events-none"
                >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button>

                <button
                    className="bg-[#4A156EFF] text-white border-none p-4 cursor-pointer text-xl transition ease-in delay-[.2ms] hover:text-white hover:bg-[#4A156EFF] pointer-events-none">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}