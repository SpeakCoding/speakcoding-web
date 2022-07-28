import { lines } from './code';

const createLine = (line, i) => `<div style="
  margin-bottom: 8px;
  padding: 8px 8px 8px 16px;
  font-family: monospace;
  font-size: 14px;
  line-height: 22px;
  color: #6C7991;
  background-color: #EDF1F5;
  vertical-align: top;
">
  <div style="
    display: inline-block;
    width: 48px
  ">
    ${i + 1}
  </div>
  <div style="
    display: inline-block;
    width: 448px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
  ">
    ${line.substring(0, 51).replace(/\s/g, '\xa0')}
    ${line.length > 51 ? '…' : ''}
  </div>
</div>

{% if var:answers.l${i + 1} %}
<div style="
  padding: 4px 8px 20px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #10162F;
  font-family: Arial, sans-serif;
">
  {{ var:answers.l${i + 1} }}
</div>
{% endif %}
`;

const res = lines.map(createLine).join('');

console.log(res);

// {"l1":"","l2":"","l3":"","l4":"","l5":"","l6":"","l7":"","l8":"","l9":"","l10":"","l11":"","l12":"","l13":"","l14":"","l15":"","l16":"","l17":"","l18":"","l19":"","l20":"","l21":"","l22":"","l23":"","l24":"","l25":"","l26":"","l27":"","l28":"","l29":"","l30":"","l31":"","l32":"","l33":"","l34":"","l35":"","l36":"","l37":"","l38":"","l39":"","l40":"","l41":"","l42":"","l43":"","l44":"","l45":"","l46":"","l47":"","l48":"","l49":"","l50":"","l51":"","l52":"","l53":"","l54":"","l55":"","l56":"","l57":"","l58":"","l59":"","l60":"","l61":"","l62":"","l63":"","l64":"","l65":"","l66":"","l67":"","l68":"","l69":"","l70":"","l71":"","l72":"","l73":"","l74":"","l75":"","l76":"","l77":"","l78":"","l79":"","l80":"","l81":"","l82":"","l83":"","l84":"","l85":"","l86":"","l87":"","l88":"","l89":"","l90":"","l91":"","l92":"","l93":"","l94":"","l95":"","l96":"","l97":"","l98":"","l99":"","l100":"","l101":"","l102":"","l103":"","l104":"","l105":"","l106":"","l107":"","l108":"","l109":"","l110":"","l111":"","l112":"","l113":"","l114":"","l115":"","l116":"","l117":"","l118":"","l119":"","l120":"","l121":"","l122":"","l123":"","l124":"","l125":"","l126":"","l127":"","l128":"","l129":"","l130":"","l131":"","l132":"","l133":"","l134":"","l135":"","l136":"","l137":"","l138":"","l139":"","l140":"","l141":"","l142":"","l143":"","l144":"","l145":"","l146":"","l147":"","l148":"","l149":"","l150":"","l151":"","l152":"","l153":"","l154":"","l155":"","l156":"","l157":"","l158":"","l159":"","l160":"","l161":"","l162":"","l163":"","l164":"","l165":"","l166":"","l167":"","l168":"","l169":"","l170":"","l171":"","l172":"","l173":"","l174":"","l175":"","l176":"","l177":"","l178":"","l179":"","l180":"","l181":"","l182":"","l183":"","l184":"","l185":"","l186":"","l187":"","l188":"","l189":"","l190":"","l191":"","l192":"","l193":"","l194":"","l195":"","l196":"","l197":""}
