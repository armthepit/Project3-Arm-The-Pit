 import React from 'react';
 import { Link } from 'react-router';

class Greetings extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome To Arm The Pit</h1>
        <h2 className="text-center">Browse Artist By </h2>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <Link to="/browsecountry">
                <img src="assets/images/lilgirl.jpg" className="img-responsive center-block" alt="By Country" />
                </Link>
              </div>
              <div className="panel-footer text-center">  
                <Link to="/browsecountry"><button type="button" className="btn btn-custom btn-block">Country</button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <Link to="/browsegenre">
                <img src="assets/images/lilgirl.jpg" className="img-responsive center-block" alt="By Genre" />
                </Link>
              </div>
              <div className="panel-footer text-center">     
                <Link to="/browsegenre"><button type="button" className="btn btn-custom btn-block">Genre</button></Link>
              </div>
            </div>
          </div>                
          <div className="col-sm-12 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <Link to="/browsename">
                <img src="assets/images/lilgirl.jpg" className="img-responsive center-block" alt="By Name" />
                </Link>
              </div>
              <div className="panel-footer text-center">    
                <Link to="/browsename"><button type="button" className="btn btn-custom btn-block">Name</button></Link>
              </div>
            </div>
          </div>                
          <div className="col-sm-12 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <Link to="/browsestate">
                <img src="assets/images/lilgirl.jpg" className="img-responsive center-block" alt="By State" />
                </Link>
              </div>
              <div className="panel-footer text-center">     
                <Link to="/browsestate"><button type="button" className="btn btn-custom btn-block">State</button></Link>
              </div>
            </div>
          </div>               
        </div>
      </div>
     );
   }
  }

 export default Greetings;
