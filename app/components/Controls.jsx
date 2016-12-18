var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button>Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button>Start</button>
      }
    }

    return (
      <div>
        {renderStartStopButton()}
        <button>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
