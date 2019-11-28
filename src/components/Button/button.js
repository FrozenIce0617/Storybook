import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const ButtonShapes = ['circle', 'circle-outline', 'round'];
const ButtonSizes = ['large', 'default', 'small'];
const ButtonHTMLTypes = ['submit', 'button', 'reset'];

class Button extends React.Component {
  static defaultProps = {
    ghost: false,
    htmlType: 'button',
  };

  static propTypes = {
    className: PropTypes.string,
    ghost: PropTypes.bool,
    htmlType: PropTypes.oneOf(ButtonHTMLTypes),
    onClick: PropTypes.func,
    shape: PropTypes.oneOf(ButtonShapes),
    size: PropTypes.oneOf(ButtonSizes),
    title: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    const {
      className,
      ghost,
      htmlType,
      onClick,
      shape,
      size,
      title,
      type,
    } = this.props;
    const prefixCls = 'portal-btn';

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${type}`]: type,
    });

    return (
      <button type={htmlType} className={classes} onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default Button;
