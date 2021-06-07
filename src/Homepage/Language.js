import React, { Component } from 'react'
import './language.css';

class Language extends Component {
    constructor() {
        super()
        this.state = {
            mydata: [
                { language: "HTML", decs: "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images." },
                { language: "CSS", decs: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once." },
                { language: "JavaScript", decs: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user." },
                { language: "React", decs: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple." }
            ],
            filterdata: [{language: "HTML", decs: "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images."},],
        }
    }

    Viewlang = (type) => {
        const { mydata } = this.state;
        switch (type) {
            case 'HTML':
                this.setState({
                    filterdata: mydata.filter((data) => data.language === type)
                })
                break;
            case 'CSS':
                this.setState({
                    filterdata: mydata.filter((data) => data.language === type)
                })
                break;
            case 'JavaScript':
                this.setState({
                    filterdata: mydata.filter((data) => data.language === type)
                })
                break;
            case 'React':
                this.setState({
                    filterdata: mydata.filter((data) => data.language === type)
                })
                break;
            default:
                break;
        }
    }

    render() {
        const { mydata, filterdata } = this.state;
        return (
            <div>
                <div className="Btn-main">
                    {mydata.map((data, i) => {
                        return (
                            <div key={i}>
                                <button onClick={() => this.Viewlang(data.language)}>{data.language}</button>
                            </div>
                        )
                    })}
                </div>
                <div className="main-card">
                <div className="Description-Card">
                    {filterdata.map((data, i) => {
                        return (
                            <div key={i}>
                                <p>{data.decs}</p>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        )
    }
}

export default Language;
