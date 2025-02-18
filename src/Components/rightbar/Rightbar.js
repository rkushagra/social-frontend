import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { API } from '../../api';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { format, render, cancel, register } from 'timeago.js';

export default function Rightbar({ profile, refresh }) {
  const HomeRightbar = () => {
    return (
      <div>
        {/* <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div> */}
        {/* <img className='rightbarAd' src='assets/ad.png' alt='' /> */}
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = ({ data }) => {
    const { id } = useParams();
    const { user, dispatch } = useContext(AuthContext);
    const token = user?.token;
    // user?.user?.followings.includes(id)
    const headers = {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    };
    // const userId = '62b6af9ab8e3051a8fd92e96';

    console.log(user?.user);
    console.log(user?.user?.followings.includes(id));
    console.log('FOLLOWINGS ', user?.user?.followings);
    console.log(profile);
    console.log(id);
    const [followed, setFollowed] = useState(
      profile?.followers.includes(user?.user?._id)
    );
    // user?.user?.followings?.includes(id)

    console.log(followed);

    function formatDate(input) {
      if (!input) return 'yet to born';
      var datePart = input?.match(/\d+/g),
        year = datePart[0],
        month = datePart[1],
        day = datePart[2];

      return day + '/' + month + '/' + year;
    }

    // useEffect(() => {
    //   setFollowed(user?.user?.followings?.includes(id));
    // }, [user?.user?.followings, id]);

    const follow = async (e) => {
      console.log(e.target.value);
      try {
        await axios.put(API + `/user/${id}/follow`, {}, headers);
        // dispatch({ type: 'FOLLOW', payload: id });
        refresh();
        setFollowed(!followed);
        // window.location.reload();
      } catch (e) {
        console.log(e);
      }
    };

    console.log(token);

    const unfollow = async (e) => {
      console.log(e.target.value);
      try {
        await axios.put(API + `/user/${id}/unfollow`, {}, headers);
        // dispatch({ type: 'UNFOLLOW', payload: id });
        refresh();
        setFollowed(!followed);
        // window.location.reload();
      } catch (e) {
        console.log(e);
      }
    };
    // id !== user?.user?._id
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>

        {followed && <h3> YOU FOLLOWING THIS USER </h3>}

        {id !== user?.user._id && (
          <>
            {!followed ? (
              <Button variant='outlined' onClick={follow}>
                follow
              </Button>
            ) : (
              <Button variant='contained' onClick={unfollow}>
                unfollow
              </Button>
            )}
          </>
        )}

        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>followers:</span>
            <span className='rightbarInfoValue'>
              {' '}
              {profile?.followers.length}{' '}
            </span>
          </div>

          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>following:</span>
            <span className='rightbarInfoValue'>
              {profile?.followings.length}
            </span>
          </div>

          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{profile?.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{profile?.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Gender:</span>
            <span className='rightbarInfoValue'>{profile?.gender}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'> {profile?.relationship} </span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Birthday:</span>
            <span className='rightbarInfoValue'>
              {formatDate(profile?.birthDay?.slice(0, 10))}
            </span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Joined:</span>
            <span className='rightbarInfoValue'>
              {format(profile?.createdAt)}
            </span>
          </div>
        </div>

        <h1>Currently followers are : </h1>
        {profile && profile?.followers.map((p) => <h6>{p}</h6>)}
        <h1>Currently following : </h1>
        {profile && profile?.followings.map((p) => <h6>{p}</h6>)}
        {/* <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/1.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/2.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/3.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/4.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/5.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/6.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
        </div> */}
      </>
    );
  };
  return (
    <div className='rightbar' style={{ flex: 2 }}>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
