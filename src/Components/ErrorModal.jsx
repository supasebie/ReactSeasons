import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

const ErrorModal = (props) => (
  <Modal open={props.errorMessage} basic size='small'>
    <Header icon='archive' content='Chrome has no access to your location' />
    <Modal.Content>
      <p>
          You must enable location services in order for Seasons to work.
      </p>
    </Modal.Content>
  </Modal>
);

export default ErrorModal;