import React from 'react';
import WHLVideoList from '../../components/WHL/WHLVideoList';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
// import vid from '../../components/Video/vid.mp4';
import './Library.css';
import { FaHistory } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import { useSelector } from "react-redux";
function Library() {

  // const vids=[
  //   {
  //     _id:1,
  //     video_src: vid,
  //     Chanel:"62bafe6752",
  //     title:"video 1",
  //     Uploder:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src: vid,
  //     Chanel:"cdd",
  //     title:"video 2",
  //     description:"description of video 2" 
  //   },
  //   {
  //     _id:3,
  //     video_src: vid,
  //     Chanel:"add",
  //     title:"vid  eo 3",
  //     description:"description of video 3" 
  //   },
  //   {
  //     _id:4,
  //     video_src: vid,
  //     Chanel:"add",
  //     title:"video 4",
  //     description:"description of video 4" 
  //   },
  //  ];
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const historyList = useSelector((state) => state.HistoryReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);
  const watchLaterList = useSelector((state) => state.watchLaterReducer);
  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList
              page={"History"}
              CurrentUser={CurrentUser?.result._id}
              videoList={historyList}
            />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList
              page={"Watch Later"}
              CurrentUser={CurrentUser?.result._id}
              videoList={watchLaterList}
            />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList
              page={"Liked Videos"}
              CurrentUser={CurrentUser?.result._id}
              videoList={likedVideoList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;