# JPMC-tech-task-2-PY3

JPMorgan Chase Software Engineering virtual internship task -1

I am doing virtual internship on JPMorgan Chase Software Engineering for that purpose i created this repo and i am going to share how finsish my task that was given by JPMorgan Chase Software Engineering

before going to task i like to share how i get this internship.

I get the internship on this website insidesherpa <a href="https://www.insidesherpa.com/"> click here</a>
other than JPMorgan Chase Software Engineering lot's of company offer free virtual internship including Microsoft,......

This repo for the task 2<br/>
<hr>
<h3> WARNING: My English not so good. so applogize me </h3>
<hr>
<h1>Task2 </h1>

<p>Here is the background information on our task

Typically, traders monitor stock prices and trading strategies by having data displayed visually on their screens in chart form. Often these charts will be accompanied by alerts that notify users when certain events occur or when preset price thresholds are hit.

JPMorgan Chase created the Perspective tool over many years to allows users to present and manipulate data feeds visually in web applications.

Perspective provides a set of flexible data transforms, such as pivots, filters, and aggregations. It utilizes bleeding-edge browser technology such as Web Assembly and Apache Arrow and is unmatched in browser performance. It is engineered for reliability and production-vetted on the JPMorgan Chase trading floor and is now available to the development community as Open Source. If you want to explore that, a link is provided in the resources section. 

* Understanding the finance and trading part is not required for this task.

* Being familiar with python scripting language, command line basics, javascript, react and typescript are not required for this task too as you will be guided in this exercise
</p>

<p>
For the second module of this project will need you to accomplish the following:

1.Set up your system by downloading the necessary files, tools and dependencies. 
  
2.Fix the broken typescript files in repository to make the web application output correctly.
  
3.Generate a patch file of the changes you made.
 
</p>
<hr>

<h1>Step1:Set up your system </h1>
 how to setup your enviroment for this task <a href="https://insidesherpa.s3.amazonaws.com/vinternships/companyassets/Sj7temL583QAYpHXD/setup_devenv_m1_v6.pdf" >Click Here</a> <br/>
 <hr>

<h1>Step2:Fix the broken typescript files in repository to make the web application output correctly</h1>
<p>
 Before fixing the broken Typescript files. we need to know some basic that are </p>
 <ol>
  <li> The file structure of the program </li>
 <pre>
├───datafeed ->which the server3.py and test(excel file ) 
├───public  ->index.html (our main html code is here the html code generated by a react is insert here while excuting the code )
└───src 
      |--index.tsx ->  this typescript program is responsible for render the whole app
      |--index.css -> this css file for index.tsx  for styling purpose
      |--App.tsx  ->this is the main typescript code 
      |--App.test.js   -> this for testing purpose  
      |--App.css -> css file for our main app.tsx(typescript)
      |--DataStreamer.ts  -> this typescript program is responsible for get data from the server
      |--Graph.tsx  -> this  typescript program is responsible for drawing a graph on the browser
      |--Graph.css  -> this css file for graph.tsx 
</pre>

<p>The above codes are work fine but we need to modify the code such that it show the top_ask price from the two stocks("ABC","DEF") in graph
and need to uppdate the graph according to the data get from the server 
</p>
<p>
so let's get start<p>
<p>To achieve this we have to change (2) files: src/App.tsx and src/Graph.tsx<p>
<h3>Making changes in `App.tsx`</h3>
<p>
● App.tsx is the main app (typescript) file of our client side react application.

● Don’t be intimidated by words like React, which is just a javascript library to
help us build interfaces and ui components, or Typescript which is just a
superset of javascript but is still alike with javascript but with stronger type
checking...
</p>
<p>
App.tsx or the App component, is basically the first component our browser
will render as it’s the parent component of the other parts of the simple page
that shows up when you first started the application in the set up phase.
</p>
<p>
● Components are basically the building blocks / parts of our web application. A
component has a common set of properties / functions and as such, each
unique component just inherits from the base React component

</p>
<p>
First we need to add the `showGraph` property in the IState interface
defined in App.tsx. It should be of the type` boolean`because we need to render the graph only if the user click the button star stream data 
so the code look like this 
</p>
<h4> Before change</h4>
<pre>
interface IState {
  // this is used to store the data get from the server the type of data is SeverRespond 
  data: ServerRespond[], 
}
</pre>
<h4>After change</h4>
<pre>
interface IState {
  // this is used to store the data get from the server the type of data is SeverRespond 
  data: ServerRespond[],
  showGraph: boolean,
}
</pre>
<p>
Next, in the constructor of the App component, you should define that the
initial state of the App not to show the graph yet. This is because we want the
graph to show when the user clicks ‘Start Streaming Data’. That means you
should set `showGraph` property of the App’s state to `false` in the
constructor</p>

so the code look like this 

<h4> Before change</h4>
<pre>
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      
    };
  }
</pre>

<h4> After change</h4>
<pre>
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      showGraph: false,
    };
  }
</pre>
