import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ModalCase({ setIsOpen, film }) {
    return (
        <div className='modal-show' >
            {/* <div id='modal1' className='modal' style={{ display: 'block', top: '35%' }}>
                <div className='modal-content'>
                    <h4>Video for {film.name}</h4>
                    <p><iframe width="100%" height="400px" src={film.trailer} frameBorder="0"
                        allow='accelerometer; autoplay; clipboard-writer; encrypted-meida; gyroscope; picture-in-picture' allowFullScreen>
                    </iframe></p>
                </div>
                <div className='modal-footer'>
                    <a className='modal-close red-text'>Close</a>
                </div>
            </div> */}
            <Modal
                open={setIsOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="demo">
                    <Typography variant="h5" sx={{ margin: "20px" }}>
                        Trailer: {film.name}
                    </Typography>
                    <p><iframe width="100%" height="400px" src={film.trailer} frameBorder="0"
                        allow='accelerometer; autoplay; clipboard-writer; encrypted-media; gyroscope; picture-in-picture' allowFullScreen>
                    </iframe></p>
                </Box>
            </Modal>
        </div>
    );
}