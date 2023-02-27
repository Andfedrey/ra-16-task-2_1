const IconSwitch = ({setToggled, toggled}) => {
  return (
    <div className="icon-wrp">
    {toggled ? ( 
      <span className="material-icons" onClick={() => setToggled(!toggled)}>
        view_list
      </span>):
      <span className="material-icons" onClick={() => setToggled(!toggled)}>
        view_module
      </span>
    }  
    </div>
  );
}
export default IconSwitch;