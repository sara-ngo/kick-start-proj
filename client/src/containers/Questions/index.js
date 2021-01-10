import React, { useState } from "react";
import ChoiceList from "./../../components/ChoiceList";
import { Link } from 'react-router-dom';
import GoBackBtn from "./../../components/GoBackBtn";
import { Button } from "../../components/button/Button";
import '../../components/quiz/TakeQuiz.css';

export default function Questions() {
    const questions = [
        {
            id: 1,
            title: "Do you support a universal healthcare system?",
            choices: [
                {
                    id: "1Alliance,Libertarian,Green,Peace,Democatic",
                    answer: "Yes"
                },
                {
                    id: "1Tea",
                    answer: "No"
                },
                {
                    id: "1Constitution,Reform,Republican",
                    answer: "Leave it up to the states/people"
                }
            ]
        }, {
            id: 2,
            title: "Should the government criminalize abortion?",
            choices: [
                {
                    id: "2Constitution,Tea,Republican",
                    answer: "Yes"
                },
                {
                    id: "2Alliance,Libertarian,Green,Peace,Democratic",
                    answer: "No"
                },
                {
                    id: "2Reform",
                    answer: "No stance"
                }
            ]
        }, {
            id: 3,
            title: "Should gun control laws be repealed?",
            choices: [               
                {
                    id: "3Alliance,Libertarian,Constitution,Tea,Republican",
                    answer: "Yes"
                },
                {
                    id: "3Green,Peace,Democratic",
                    answer: "No"
                },
                {
                    id: "3Reform",
                    answer: "No stance"
                }
            ]
        }, {
            id: 4,
            title: "Do you support the concept of a minimum wage?",
            choices: [
                {
                    id: "4Alliance,Green,Reform,Democratic,Peace",
                    answer: "Yes"
                },
                {
                    id: "4Libertarian,Constitution,Tea,Republican",
                    answer: "No"
                }
            ]
        }, {
            id: 5,
            title: "Should the federal government pay for tuition at 4-year colleges and universities?",
            choices: [
                {
                    id: "5Alliance,Green,Reform,Peace,Democratic",
                    answer: "Yes"
                },
                {
                    id: "5Libertarian,Constitution,Tea,Republican",
                    answer: "No"
                }
            ]
        }, {
            id: 6,
            title: "Should the US erect a wall along the US-Mexico border?",
            choices: [
                {
                    id: "6Constitution,Republican,Tea",
                    answer: "Yes"
                },
                {
                    id: "6Alliance,Libertarian,Green,Peace,Democratic",
                    answer: "No"
                },
                {
                    id: "6Reform",
                    answer: "No, but increase border security"
                }
            ]
        }, {
            id: 7,
            title: "Should there be caps on election campaign donations?",
            choices: [
                {
                    id: "7Alliance,Green,Peace,Reform,Democratic",
                    answer: "Yes"
                },
                {
                    id: "7Republican,Tea",
                    answer: "No"
                },
                {
                    id: "7Libertarian,Constitution",
                    answer: "No, and abolish financially regulatory election laws"
                }
            ]
        }, {
            id: 8,
            title: "Should the Electoral College be abolished?",
            choices: [
                {
                    id: "8Libertarian,Green,Democratic",
                    answer: "Yes"
                },
                {
                    id: "8Constitution",
                    answer: "Yes, and revert back to original electoral college found in Constitution."
                },
                {
                    id: "8Peace,Reform",
                    answer: "Yes, and replace with election by popular vote"
                },
                {
                    id: "8Alliance",
                    answer: "Yes, and replace with ranked choice voting"
                },
                {
                    id: "8Republican,Tea",
                    answer: "No"
                }
            ]
        }, {
            id: 9,
            title: "Should the US withdraw from the Paris Climate Agreements?",
            choices: [
                {
                    id: "9Constitution,Tea,Republican",
                    answer: "Yes"
                },
                {
                    id: "9Alliance,Libertarian,Green,Reform,Peace,Democratic",
                    answer: "No"
                }
            ]
        }, {
            id: 10,
            title: "Should the government increase environmental regulations?",
            choices: [
                {
                    id: "10Alliance,Green,Reform,Democratic",
                    answer: "Yes"
                },
                {
                    id: "10Libertarian,Constitution,Tea,Republican",
                    answer: "No, or decrease regulations"
                }
            ]
        }, {
            id: 11,
            title: "Should the police be defunded?",
            choices: [
                {
                    id: "11Libertarian,Green,Democratic,Peace",
                    answer: "Yes"
                },
                {
                    id: "11Alliance,Constitution,Reform,Tea,Republican",
                    answer: "No"
                }
            ]
        }, {
            id: 12,
            title: "Should the police have qualified immunity?",
            choices: [
                {
                    id: "12Constitution,Tea,Republican",
                    answer: "Yes"
                },
                {
                    id: "12Alliance,Libertarian,Green,Reform,Peace,Democratic",
                    answer: "No"
                }
            ]
        }, {
            id: 13,
            title: "Should the government invest in alternative energy resources?",
            choices: [
                {
                    id: "13Alliance,Libertarian,Green,Reform,Peace,Democratic",
                    answer: "Yes"
                },
                {
                    id: "13Constitution,Tea,Republican",
                    answer: "No"
                }
            ]
        }, {
            id: 14,
            title: "Should the government mandate vaccinations of preventable diseases for all children?",
            choices: [
                {
                    id: "14Alliance,Green,Peace,Democratic",
                    answer: "Yes"
                },
                {
                    id: "14Libertarian,Constitution,Tea,Republican",
                    answer: "No"
                },
                {
                    id: "14Reform",
                    answer: "No stance"
                }
            ]
        }, {
            id: 15,
            title: "Should the government increase its regulation of businesses?",
            choices: [
                {
                    id: "15Green,Peace,Democratic",
                    answer: "Yes"
                },
                {
                    id: "15Alliance,Libertarian,Constitution,Reform,Republican",
                    answer: "No or decrease regulations"
                }
            ]
        }, {
            id: 16,
            title: "Should the US military be allowed to assassinate suspected terrorists?",
            choices: [
                {
                    id: "16Constitution,Tea,Republican",
                    answer: "Yes"
                },
                {
                    id: "16Reform",
                    answer: "Yes, only if they have definitive evidence against the suspect."
                },
                {
                    id: "16Alliance,Libertarian,Green,Peace,Democratic",
                    answer: "No"
                }
            ]
        }, {
            id: 17,
            title: "Should the president stop the War on Terror in the Middle East?",
            choices: [
                {
                    id: "17Alliance,Libertarian,Green,Peace,Democratic",
                    answer: "Yes"
                },
                {
                    id: "17Reform,Tea,Republican,Constitution",
                    answer: "No"
                }
            ]
        }, {
            id: 18,
            title: "Should the government be involved in international affairs (NATO, United Nations, etc.)?",
            choices: [
                {
                    id: "18Alliance,Libertarian,Green,Peace,Reform,Democratic",
                    answer: "Yes"
                },
                {
                    id: "18Constitution,Tea,Republican",
                    answer: "No"
                }
            ]
        }, {
            id: 19,
            title: "Should the government increase spending on national defense?",
            choices: [
                {
                    id: "19Libertarian,Constitution,Reform,Tea,Republican",
                    answer: "Yes"
                },
                {
                    id: "19Alliance,Green,Peace,Democratic",
                    answer: "No"
                }
            ]
        }, {
            id: 20,
            title: "Should the government increase spending on public transportation (buses, metro, etc)?",
            choices: [
                {
                    id: "20Alliance,Green,Peace,Democratic",
                    answer: "Yes"
                },
                {
                    id: "20Libertarian",
                    answer: "Public transportation should be paid voluntarily"
                },
                {
                    id: "20Constitution",
                    answer: "No"
                },
                {
                    id: "20Reform",
                    answer: "No stance"
                }
            ]
        }
    ];
    const iniObj = {
        Republican: 0, Democratic: 0, Tea: 0, Constitution: 0,
        Green: 0, Peace: 0, Libertarian: 0, Alliance: 0, Reform: 0
    };
    const [obj, setObj] = useState(iniObj);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [end, setEnd] = useState(false);
    const [result, setResult] = useState("");
    const [isAnswered, setIsanswered] = useState(false);

    const handleClick = (id) => {
        setIsanswered(true);
        if (id.includes("Republican")) {
            setObj(prevObj => ({ ...prevObj, Republican: obj.Republican + 1 }));
        }
        if (id.includes("Democratic")) {
            setObj(prevObj => ({ ...prevObj, Democratic: obj.Democratic + 1 }));
        }
        if (id.includes("Tea")) {
            setObj(prevObj => ({ ...prevObj, Tea: obj.Tea + 1 }));
        }
        if (id.includes("Constitution")) {
            setObj(prevObj => ({ ...prevObj, Constitution: obj.Constitution + 1 }));
        }
        if (id.includes("Green")) {
            setObj(prevObj => ({ ...prevObj, Green: obj.Green + 1 }));
        }
        if (id.includes("Peace")) {
            setObj(prevObj => ({ ...prevObj, Peace: obj.Peace + 1 }));
        }
        if (id.includes("Libertarian")) {
            setObj(prevObj => ({ ...prevObj, Libertarian: obj.Libertarian + 1 }));
        }
        if (id.includes("Alliance")) {
            setObj(prevObj => ({ ...prevObj, Alliance: obj.Alliance + 1 }));
        }
        if (id.includes("Reform")) {
            setObj(prevObj => ({ ...prevObj, Reform: obj.Reform + 1 }));
        }
    }
    const next = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            var str = String(Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b));
            setResult(str);
            setEnd(true);
            console.log(result)
        }
        setIsanswered(false);
        console.log(obj);
    }
    const again = () => {
        setCurrentQuestion(0);
        setEnd(false)
        setObj(iniObj);
        setIsanswered(false);
    }
    return (
        <>
            <div className="content" >
                <div className="card">
                    {end ?
                        <div className="text-white">
                            <h3>This is your result:</h3>
                            <h5>Republican Party: {obj.Republican}</h5>
                            <h5>Democratic Party: {obj.Democratic}</h5>
                            <h5>Libertarian Party: {obj.Libertarian}</h5>
                            <h5>Constitution Party: {obj.Constitution}</h5>
                            <h5>Alliance Party: {obj.Alliance}</h5>
                            <h5>Tea Party: {obj.Tea}</h5>
                            <h5>Green Party: {obj.Green}</h5>
                            <h5>Peace and Freedom: {obj.Peace}</h5>
                            <h5>Reform Party: {obj.Reform}</h5>
                            <h3>The result shows that you should join {result} Party but the decision is your</h3>
                            <div className="button">
                                <Button buttonStyle='btn--form' onClick={again}>
                                    Try again
                                </Button>
                                <GoBackBtn />
                            </div>
                        </div> :
                        <>
                            <div className="card-header">
                                Question {questions[currentQuestion].id}
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{questions[currentQuestion].title}</h5>
                                <ChoiceList choices={questions[currentQuestion].choices}
                                    handleClick={handleClick} />
                            </div>

                            <div className="card-btn">
                                {isAnswered ? <Button buttonStyle='btn--primary' buttonSize='btn--medium'
                                onClick={next}>
                                    Next
                                </Button> : null}
                                <Link to='/'>
                                    <Button buttonStyle='btn--outline' style={{float:"right"}} buttonSize='btn--medium'>
                                        Quit
                                    </Button>
                                </Link>
                                
                            </div>
                        </>}

                </div>


            </div>
        </>
    );

}