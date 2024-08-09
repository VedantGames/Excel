class cell {
  value = null;
  textColor = '#000';
  bgColor = null;
  textSize = 11;
  fontFamily = 'Calibri';
  fontWeight = 500;
  fontStyle = 'normal';
  textDecoration = 'none'

  style = {
    font: {
      value: null,
      textColor: '#000',
      bgColor: null,
      textSize: 11,
      fontFamily: 'Calibri',
      fontWeight: 500,
      fontStyle: 'normal',
      textDecoration: 'none'
    },
    alignment: {
      align: null,
      anchor: null
    }
  }

  
  constructor(value) {
    this.value = value;
  }
}

export default cell;