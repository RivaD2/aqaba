import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #E4AFC0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const SpringModal = ({toggleModalCallback}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // content for any modal!
  const [content, setContent] = useState(null);

  React.useEffect(() => {
    // Passing setOpen function to Parent, App
    if(!toggleModalCallback) return;
    toggleModalCallback(toggleModalContent);
  },[toggleModalCallback]);
  
  /**
   *  * Sets the content of whateverm modal has been selected. Calling the modal with
   * an arg will open the modal.
   * @param  newContent - React.Element
   */
  const toggleModalContent = newContent => {
   setContent(newContent);
   setOpen(!!newContent);
  }

  /**
   * Closes the modal by setting state to false
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {content}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal;
