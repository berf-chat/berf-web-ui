import React from 'react';

/**
 * Dashboard component
 */
export default function Dashboard(): JSX.Element {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Chats</h4>
            </div>
          </div>
          <div className="inbox_chat">
            <div className="chat_list active_chat">
              <div className="chat_people">
                <div className="chat_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                  <h5>
                    User 1 <span className="chat_date">Dec 25</span>
                  </h5>
                  <p>Lorem ipsum something</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mesgs">
          <div className="msg_history">
            <div className="incoming_msg">
              <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Lorem ipsum something dolor</p>
                  <span className="time_date"> 11:01 AM | June 9</span>
                </div>
              </div>
            </div>

            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Lorem ipsum something dolor</p>
                <span className="time_date"> 11:01 AM | June 9</span>{' '}
              </div>
            </div>

            <div className="incoming_msg">
              <div className="incoming_msg_img">
                {' '}
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />{' '}
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Lorem ipsum something dolor</p>
                  <span className="time_date"> 11:01 AM | Yesterday</span>
                </div>
              </div>
            </div>

            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Lorem ipsum something dolor Test</p>
                <span className="time_date"> 11:01 AM | Today</span>{' '}
              </div>
            </div>

            <div className="incoming_msg">
              <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>
                    We work directly with our designers and suppliers, and sell direct to you, which means quality,
                    exclusive products, at a price anyone can afford.
                  </p>
                  <span className="time_date"> 11:01 AM | Today</span>
                </div>
              </div>
            </div>
          </div>

          <div className="type_msg">
            <div className="input_msg_write">
              <input type="text" className="write_msg" placeholder="Type a message" maxLength={140} />
              <button className="msg_send_btn" type="button">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
