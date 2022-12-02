import './controller.scss'
const Controller =() =>{
    return (
        <div className="box">
        <div className="control">
            <div className="rec">
                <div id="line">
                    <div id="line2">
                        <div id="line3">
                            <div id="line4"></div>
                        </div>
                    </div>
                </div>
                <div id="L"></div>
                <div id="R"></div>
            </div>
             <div className="triggerL"></div>
            <div className="control-round">
               
                <div className="circle">
                    <div className="t"></div>
                </div>
            </div>
            <div className="triggerR"></div>
            <div className="control-round2">
                <div className="circle">
                    <div className="buttons">
                        <span id='red'></span>
                        <span id='green'></span>
                        <span id='blue'></span>
                        <span id='yellow'></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Controller;