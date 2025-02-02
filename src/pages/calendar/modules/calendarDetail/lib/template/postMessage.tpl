﻿<div class="editBox editBoxMaxHeight">
    <div class="postMessageList">
        <ul class='clearfix pTop15'>
            {{~ it.data:member:i}}
            {{? member.id !== md.global.Account.accountId}}
            <li mobile="{{! member.mobile }}" email="{{! member.email }}" uid="{{! member.id }}" type="{{! member.type }}">
                <span class="postCheck markUnCompleteSmall"></span>
                <img src="{{! member.head }}" class="calendarPostLabelImg">
                <span class="postMessageName">{{! member.name }} {{!i == 0 ? _l('（发起人）') : '' }}</span>
            </li>
            {{?}}
            {{~}}
        </ul>
    </div>
</div>
<div class="editBox">
    <div class="postOperator">
        <span class="markUnCompleteSmall" id="postAllCheck"></span> {{=_l('全选') }} <span class="postOperatorM">|</span>
        <a href="javascript:void(0);" class="postOperatorM ThemeColor3" id="btnprivate" type="1">{{= _l('群发消息') }}</a>
        <a href="javascript:void(0);" class="postOperatorM" id="btnEmail" type="2">{{= _l('群发邮件') }}</a>
    </div>
    <div class="postContent">
        <div class="postContentPrivate" type="1" id="btnSendType">
            <span class="postContentArrowW"></span>
            <span class="postContentArrowN"></span>
        </div>
        <textarea id="postContent" class="borderRadius" >{{! it.defaultContent }}</textarea>
        <div class="postContentMessage">
            {{= '非通讯录联系人的，您可以通过邮件联系他们。 '}}
        </div>
    </div>
</div>
