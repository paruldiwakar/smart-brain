import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'This Brain will detect faces. Give it a try...'}
            </p>
            <div>
                <input className='f4 pa2 w-70 center tc br4 bw0' type='text' onChange={onInputChange}
                placeholder='Upload an image'/>
                <br />
                <button 
                className='w-25 grow f4 link br4 bw0 ph3 pv2 tc white bg-light-purple '
                onClick={onButtonSubmit}
                >Detect
                </button>
            </div>
        </div>
    );
}

export default ImageLinkForm;