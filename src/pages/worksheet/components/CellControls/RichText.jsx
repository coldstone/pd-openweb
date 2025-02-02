import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import cx from 'classnames';
import { Dialog } from 'ming-ui';
import EditableCellCon from '../EditableCellCon';
import renderText from './renderText';
import { RichText } from 'ming-ui';
export default class Text extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({}),
    editable: PropTypes.bool,
    isediting: PropTypes.bool,
    updateCell: PropTypes.func,
    cell: PropTypes.shape({ value: PropTypes.string }),
    value: PropTypes.string,
    needLineLimit: PropTypes.bool,
    updateEditingStatus: PropTypes.func,
    onClick: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.cell.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cell.value !== this.props.cell.value) {
      this.setState({ value: nextProps.cell.value });
    }
  }

  @autobind
  handleChange(value) {
    const { updateCell, updateEditingStatus } = this.props;
    updateCell({
      value,
    });
    // updateEditingStatus(false);
    this.setState({
      value,
    });
  }

  renderEditDialog() {
    const { cell, updateEditingStatus } = this.props;
    return (
      <Dialog
        visible
        title={cell.controlName}
        width={800}
        footer={null}
        anim={false}
        onCancel={() => updateEditingStatus(false)}
      >
        <RichText
          data={this.state.value || ''}
          onSave={this.handleChange}
          className={cx('cellControlRichTextDialog')}
        />
      </Dialog>
    );
  }

  render() {
    const { className, style, needLineLimit, cell, editable, isediting, updateEditingStatus } = this.props;
    const { value } = this.state;
    return (
      <EditableCellCon
        onClick={this.props.onClick}
        className={cx(className, { canedit: editable })}
        style={style}
        iconName="hr_edit"
        isediting={isediting}
        onIconClick={() => {
          updateEditingStatus(true);
        }}
      >
        {isediting && this.renderEditDialog()}
        {!!value && (
          <div className={cx('worksheetCellPureString', { linelimit: needLineLimit })}>
            {renderText({ ...cell, value })}
          </div>
        )}
      </EditableCellCon>
    );
  }
}
