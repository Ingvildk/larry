import React from 'react/addons';
import {Navigation}
from 'react-router';
import Actions from './Actions';

export default React.createClass({
    render: function() {
        return ( < video width = "320"
            height = "240"
            controls >
            < source src = "./videos/video1.mov"
            type = "video/mp4" >>
            Your browser does not support the video tag. < /video>
        );
    }
});