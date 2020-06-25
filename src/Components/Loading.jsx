import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import '../Css/Seasons.css';


const Loading = (props) => (
  <div>
      <Dimmer active>
        <Loader className={'loader'}>{props.message}</Loader>
      </Dimmer>
  </div>
)

Loading.defaultProps = {
  message: 'Loading...',
}

export default Loading;