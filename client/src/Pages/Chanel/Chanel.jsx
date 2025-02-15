import React from 'react'
import { useSelector } from 'react-redux';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
// import vid from '../../components/Video/vid.mp4';
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router';

function Chanel({setEditCreateChanelBtn,setVidUploadPage} ) {
    
  const {Cid}=useParams();
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === Cid).reverse();

// const vids = [
//   {
//     _id: 1,
//     video_src: vid,
//     Chanel: "62bafe6752cea35a6c30685f",
//     title: "video 1",
//     Uploder: "abc",
//     description: "description of  video 1",
//   },
//   {
//     _id: 2,
//     video_src: vid,
//     Chanel: "cdd",
//     title: "video 2",
//     Uploder: "abc",
//     description: "description of  video 2",
//   },
//   {
//     _id: 3,
//     video_src: vid,
//     Chanel: "add",
//     title: "video 3",
//     Uploder: "abc",
//     description: "description of  video 3",
//   },
//   {
//     _id: 4,
//     video_src: vid,
//     Chanel: "add",
//     title: "video 3",
//     Uploder: "abc",
//     description: "description of  video 3",
//   },
// ];
  return (
      <div className="container_Pages_App">
        <LeftSidebar />
        <div className="container2_Pages_App">
          <DescribeChanel 
          Cid={Cid}
          setVidUploadPage={setVidUploadPage}
          setEditCreateChanelBtn={setEditCreateChanelBtn}/>
          <ShowVideoGrid vids={vids} />
        </div>
      </div>
    );
}

export default Chanel