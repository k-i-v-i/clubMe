import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Clubs row starts */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3><sup style ={{fontSize: 25}}>Business Club</sup></h3>
              <p>Instructor Name</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3><sup style ={{fontSize: 25}}>Finance Club</sup></h3>
              <p>Instructor Name</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3><sup style ={{fontSize: 25}}>Gaming Club</sup></h3>
              <p>Instructor Name</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3><sup style ={{fontSize: 25}}>Entrepreneurship Club</sup></h3>
              <p>Instructor Name</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
      </div>
      {/* Clubs row finish /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Announcements
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">My Clubs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sales-chart" data-toggle="tab">General</a>
                  </li>
                </ul>
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
              <div className="tab-content p-0">
                {/* Morris chart - Sales */}
                <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
                </div>
                <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                </div>  
              </div>
            </div>{/* /.card-body */}
          </div>
          {/* /.card */}
          {/* DIRECT CHAT */}
          <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>
              <div className="card-tools">
                <span data-toggle="tooltip" title="3 New Messages" className="badge badge-primary">3</span>
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                  <i className="fas fa-comments" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* Message. Default to the left */}
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">Deniz Incereis</span>
                    <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Message
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">Onur Bacaksiz</span>
                    <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Message
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message. Default to the left */}
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">Beste Karaca</span>
                    <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Message
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">Deniz Incereis</span>
                    <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Message
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Beste Karaca
                          <small className="contacts-list-date float-right">2/28/2021</small>
                        </span>
                        <span className="contacts-list-msg">Message</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Deniz Incereis
                          <small className="contacts-list-date float-right">2/23/2021</small>
                        </span>
                        <span className="contacts-list-msg">Message</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Onur Bacaksiz
                          <small className="contacts-list-date float-right">2/20/2021</small>
                        </span>
                        <span className="contacts-list-msg">Message</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Deniz İncereis
                          <small className="contacts-list-date float-right">2/10/2021</small>
                        </span>
                        <span className="contacts-list-msg">Message one</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Beste Karaca
                          <small className="contacts-list-date float-right">1/27/2021</small>
                        </span>
                        <span className="contacts-list-msg">Hello</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Onur Bacaksiz
                          <small className="contacts-list-date float-right">1/4/2021</small>
                        </span>
                        <span className="contacts-list-msg">Got your message</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contacts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                  <span className="input-group-append">
                    <button type="button" className="btn btn-primary">Send</button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
          {/* TO DO List */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="ion ion-clipboard mr-1" />
                To Do List
              </h3>
              <div className="card-tools">
                <ul className="pagination pagination-sm">
                  <li className="page-item"><a href="#" className="page-link">«</a></li>
                  <li className="page-item"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                  <li className="page-item"><a href="#" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">»</a></li>
                </ul>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <ul className="todo-list" data-widget="todo-list">
                <li>
                  {/* drag handle */}
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                    <label htmlFor="todoCheck1" />
                  </div>
                  {/* todo text */}
                  <span className="text">Design a nice theme</span>
                  {/* Emphasis label */}
                  <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                    <label htmlFor="todoCheck2" />
                  </div>
                  <span className="text">Make the theme responsive</span>
                  <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                    <label htmlFor="todoCheck3" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                    <label htmlFor="todoCheck4" />
                  </div>
                  <span className="text">Message sent</span>
                  <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                    <label htmlFor="todoCheck5" />
                  </div>
                  <span className="text">Check your messages and notifications</span>
                  <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                    <label htmlFor="todoCheck6" />
                  </div>
                  <span className="text">Message sent</span>
                  <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
              </ul>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
            </div>
          </div>
          {/* /.card */}
        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable">
          
          
          {/* Calendar */}
          <div className="card bg-gradient-success">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="far fa-calendar-alt" />
                Calendar
              </h3>
              {/* tools card */}
              <div className="card-tools">
                {/* button with a dropdown */}
                <div className="btn-group">
                  <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                    <i className="fas fa-bars" /></button>
                  <div className="dropdown-menu float-right" role="menu">
                    <a href="#" className="dropdown-item">Add new event</a>
                    <a href="#" className="dropdown-item">Clear events</a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">View calendar</a>
                  </div>
                </div>
                <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
              {/* /. tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body pt-0">
              {/*The calendar */}
              <div id="calendar" style={{width: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

      );
  }
}

export default Dashboard;