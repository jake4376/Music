import React, {Component} from 'react'
import { Icon } from 'antd'
import './style.css'

class Table extends Component {
    handleClick = (data) => {
        this.props.editData(data)
    }
    render () {
        const { data, column, prevpage, nextpage, page, name } = this.props
        let pre_button = false
        let next_button = false
        let buttonname = ''
        if ( page === 0 ) {
            pre_button = true
        }
        if ( data.length < 10) {
            next_button = true
        }
        if (column.length === 6) {
            buttonname='lpage'
        } else {
            buttonname='tpage'
        }
        if (name === 'frame') {
            return (
                <div>
                    <table className="customers" style={{marginTop: '5px !important'}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                {
                                    column.map((val, index) => (
                                        <th key={index}>{val.title}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, index) => (
                                    <tr key={index} onClick={() => this.handleClick(val)}>
                                        <td>{index+1}</td>
                                        {
                                            column.map((toto, subindex) => (
                                                <td key={subindex}>{val[toto.value]}</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="button_block">
                        <button onClick={()=>prevpage(buttonname)} disabled={pre_button}>
                            <Icon type="left" />
                        </button>
                        <button>
                        {page+1}
                        </button>
                        <button onClick={()=>nextpage(buttonname)} disabled={next_button}>
                            <Icon type="right" />
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <table className="customers" style={{marginTop: '5px !important'}}>
                    <thead>
                        <tr>
                            {
                                column.map((val, index) => (
                                    <th key={index}>{val.title}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val, index) => (
                                <tr key={index}>
                                    {
                                        column.map((toto, subindex) => (
                                            <td key={subindex}>{val[toto.value]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="button_block">
                    <button onClick={()=>prevpage(buttonname)} disabled={pre_button}>
                        <Icon type="left" />
                    </button>
                    <button>
                    {page+1}
                    </button>
                    <button onClick={()=>nextpage(buttonname)} disabled={next_button}>
                        <Icon type="right" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Table