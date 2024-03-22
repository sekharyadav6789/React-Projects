//Lec-02 (How React executes and what is JSX)
// //1.const element= React.createElement('div',{},'Hello World');
// //React.createElement('tagName',{className},'text) --> It creates the element by react.
// const element= React.createElement('div',{},'Hello World',
//      React.createElement('h1',{className: 'Leela'},'Leela Web dev')
// );

// //2 This is only works because of babel compiler.
// const element2=(
//     <div>
//         <div> Hello World 1</div>
//         <h1 className='Leela'>
//         Leela Web dev
//         </h1>
//     </div>
// )

// ReactDOM.render(element2,document.getElementById('app'));

//Lec-03(Need of JSX and syntax of JSX in react)
/*const ChannelName='Leela Web Dev';
function GetChannelName(){
    if(ChannelName==='Leela Web Dev'){
        return <div>Hello Leela Web Dev</div>;
    }
    else{
        return <div>Hello Not Leela Web Dev</div>;
    }

}
const element=(
    <div>
        <h1 className='Leela'> Hello World with JSX</h1>
        <h2 className='Leela1' tabIndex='1'>Hello World with a tabIndex</h2>
        {GetChannelName()}
    </div>
)

ReactDOM.render(element,document.getElementById('app'));*/

//Lec-04 Understand Virtual DOM and Virtal DOM vs HTML

//By using HTML
function render(){
    //1.DOM(HTML) -> Every element is updated here
    const element1=`<div>
    <div>Hello World</div>
    <div><input type='text'/></div>
    <div>${new Date().toLocaleTimeString()}</div>
    </div>`;
    document.getElementById('app1').innerHTML=element1;
    
    //2.Virtual DOM(React) --> Only required element is updated here
    const element2=React.createElement(
        'div',
        {},
        React.createElement('div',{},'Hello World'),
        React.createElement('div',{}, React.createElement('input',{type:'text'}, )),
        React.createElement('div',{},new Date().toLocaleTimeString())
    );
    ReactDOM.render(element2,document.getElementById('app2'));
};

setInterval(render,1000);