import React from 'react';
import ReactDOM from 'react-dom';
import { styles} from '../styles';
import { PropTypes } from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  render() {
    const {copying, toggleTape, handleChange, value} = this.props;
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {this.props.name ? this.props.name : 'Tom'}</h1>
        <input type='text' value={value} onChange={handleChange}/>
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>
          {copying && value}
        </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string
};


ReactDOM.render(<CopyCat />, document.getElementById('app'));