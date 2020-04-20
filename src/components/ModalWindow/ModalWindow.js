import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { observer } from 'mobx-react-lite';
import { ModalContentStoreContext } from '../../store/modalContentStore';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TransitionsModal = observer(({ children }) => {
  const modalContentStore = useContext(ModalContentStoreContext);

  const classes = useStyles();

  const handleOpen = () => {
    // modalContentStore.setContent(true);
  };

  const handleClose = () => {
    modalContentStore.setContent(null);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        className={classes.modal}
        open={!!modalContentStore.content}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={!!modalContentStore.content}>
          <div className={classes.paper}>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

export default TransitionsModal;
