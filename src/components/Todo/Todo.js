import React, {Component} from 'react'

export default class Todo extends Component {

    checkedHandler(id) {
        this.props.editHandler(id)
    }

    trashHandler(id) {
        this.props.removeHandler(id)
    }

    render() {
        return (
            // 'completed' class for completed todos
            <div
                className={this.props.completed ?
                    "flex justify-between items-center m-6 bg-white text-2xl transition ease-in delay-[.5ms] text-[#585757FF] opacity-60 line-through"
                    : "flex justify-between items-center m-6 bg-white text-2xl transition ease-in delay-[.5ms] text-[#585757FF]"}>
                <li className="py-0 px-5 flex-1">{this.props.Title}</li>

                <button
                    className="bg-[#4464ADFF] text-white border-none p-4 cursor-pointer text-xl  ease-in delay-[.2ms] hover:bg-[#4464ADFF] hover:text-white"
                    onClick={this.checkedHandler.bind(this, this.props.id)}
                >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button>

                <button
                    className="bg-[#4A156EFF] text-white border-none p-4 cursor-pointer text-xl transition ease-in delay-[.2ms] hover:text-white hover:bg-[#4A156EFF]"
                    onClick={this.trashHandler.bind(this, this.props.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}