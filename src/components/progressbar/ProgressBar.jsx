const ProgressBar = (props) => {
    const { bgcolor, completed,skills} = props;
  
    const containerStyles = {
      height: 8,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      position:"relative"
    // marginTop:10
    }
  
    const fillerStyles = {
      height: 8,
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      color: 'white',
      width:'40px',
      backgroundColor:"green",
      fontWeight: 'normal',
      margin:"auto",
      textAlign:"center",
      position:"absolute",
      padding:".5rem",
      top:8,
      fontSize:10
    }
  
    return (
     <div className="progess-bar-container">
        <h1>{skills}</h1>
         <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
     </div>
    );
  };
  
  export default ProgressBar;
  