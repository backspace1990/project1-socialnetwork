import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i1.sndcdn.com/avatars-vTz4Uz5gwRSMyG7U-B6a28A-t200x200.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://sun9-33.userapi.com/impf/c840420/v840420083/3c8a5/U3wlWVNRetQ.jpg?size=1080x1080&quality=96&sign=f82e39a5d9033a6625d37098d5ab4e1b&type=album',
                followed: true,
                fullName: 'Umit',
                status: 'I am a student React-Redux',
                location: {city: 'Malatya', country: 'Turkey'}
            },
            {
                id: 3,
                photoUrl: 'https://sun9-67.userapi.com/impg/tNY9Gkhokmj4hHwW7oV34CadOuvZGsa8_Y7jAw/m8X_dHd7xXM.jpg?size=1280x960&quality=96&sign=076d65a470745a680497e322fcc286da&type=album',
                followed: false,
                fullName: 'Ekaterina',
                status: 'I am a analytics Express',
                location: {city: 'Moscow', country: 'Russia'}
            }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;