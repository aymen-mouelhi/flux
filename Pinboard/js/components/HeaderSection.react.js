/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var HeaderSection = React.createClass({
    render: function () {
        return (
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-film"></span>
                            Kor<strong>ko</strong></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Categories
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Helping Zone</a>
                                    </li>
                                    <li>
                                        <a href="#">Offers</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                    <li>
                                        <a href="#">Wanted</a>
                                    </li>
                                    <li>
                                        <a href="#">Jobs / Giggs</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">Commercial Offers</a>
                                    </li>
                                    <li className="divider"></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="col-sm-3 col-md-3 pull-right">
                            <form className="navbar-form" role="search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" name="q" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
        );
    }
});

module.exports = HeaderSection;