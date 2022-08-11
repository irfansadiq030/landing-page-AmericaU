import React from 'react'
import './ChatTab.css'

const ChatTab = (props) => {
    const { chatTabActive } = props
    console.warn(chatTabActive);
    return (
        <>
            <div style={chatTabActive === 3 ? { display: 'flex' } : { display: 'none' }} className='chat-tab'>
                <div className="chat-txt-container">
                    <div className='chatMsg-time-container'>
                        <div className="txt-msg">
                            I'm ready to attack the pirates!
                        </div>
                        <span className='msg-time'>Charming Shyclown 9:35 am</span>
                    </div>
                    <div className='chatMsg-time-container'>
                        <div className="txt-msg">
                            Wait, I'm still working on it!
                        </div>
                        <span className='msg-time'>Irfan Sadiq 8:17 am</span>
                    </div>
                    <div className='chatMsg-time-container'>
                        <div className="txt-msg">
                            Hello
                        </div>
                        <span className='msg-time'>Charming Shyclown 9:35 am</span>
                    </div>

                </div>
                <form className="chat-category">
                    <select className='chat-dropdown'>
                        <option value="actual value 1">Chat Category</option>
                        <option value="actual value 2">Category A</option>
                        <option value="actual value 3">Category B</option>
                    </select>
                    <input type="text" class='chat-txt' placeholder='Type a Message' />
                    <button type="submit" className='post-btn'>
                        <img className='btn-img' src="images/Portal_btnBlue.png" alt="" />
                        <span className='post-btn-txt'>post</span>
                    </button>
                </form>

            </div>
        </>
    )
}

export default ChatTab
