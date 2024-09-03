import React, {Component} from 'react'
import Todo from '../Todo/Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <form className='min-h-50vh flex justify-center items-center'>
                    <input
                        type="text"
                        className="p-2 border-none text-3xl bg-[#f4f4f4] text-[#585757FF]"
                        maxLength="40"
                    />
                    <button
                        className="p-2 border-none text-3xl bg-white text-[#4A156EFF]
                        cursor-pointer transition ease-in delay-[.3ms] hover:bg-[#4A156EFF]
                        hover:text-white"
                        type="submit"
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                    <div className="m-4 relative overflow-hidden after:content-[\25BC] after:absolute after:bg-[#4A156EFF] after:top-0 after:right-0 after:p-5 after:pointer-events-none after:transition after:ease-in after:delay-[.3ms] hover:after:bg-white hover:after:text-[#4A156EFF]">
                        <select className="appearance-none outline-none border-none text-xl text-[#4A156EFF] w-40 cursor-pointer p-3" name="todos">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="flex justify-center items-center">
                    <ul className="list-none min-w-[30%]">
                        <Todo/>
                    </ul>
                </div>
            </>
        )
    }
}
