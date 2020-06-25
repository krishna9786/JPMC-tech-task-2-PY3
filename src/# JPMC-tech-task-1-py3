# JPMC-tech-task-1-py3
JPMorgan Chase Software Engineering virtual internship task -1

I am doing virtual internship on JPMorgan Chase Software Engineering for that purpose i created this repo and i am going to share how finsish my task that was given by JPMorgan Chase Software Engineering

before going to task i like to share how i get this internship.

I get the internship on this website insidesherpa <a href="https://www.insidesherpa.com/"> click here</a>
other than JPMorgan Chase Software Engineering lot's of company offer free virtual internship including Microsoft,......

This repo for the task 1<br/>
<hr>
<h3> WARNING: My English not so good. so applogize me </h3>
<hr>
<h1>Task1 </h1>

To know more About Task1 <a href="https://www.insidesherpa.com/modules/R5iK7HMxJGBgaSbvk/gtAhtcvke9AFCzqME">Click Here</a>

Here is the background information on our task

we’ve been asked to assist with some development to add a chart to a trader’s dashboard allowing them to better identify under/over-valued stocks.

The trader would like to be able to monitor two historically correlated stocks and be able to visualize when the correlation between the two weakens (i.e. one stock moves proportionally more than the historical correlation would imply). This could indicate a potential trade strategy to simultaneously buy the relatively underperforming stock and sell the relatively outperforming stock. Assuming the two prices subsequently converge, the trade should be profitable.

Most data visualization for our traders is built on JPMorgan Chase's Perspective data visualization software, which is now open source.

Before implementing this request using perspective, first you’ll need to interface with the relevant financial data feed and make the necessary adjustments to facilitate the monitoring of potential trade opportunities.

* Understanding the finance and trading part is not required.

* Being familiar with python scripting language and command line basics is not required as you will be guided in this exercise


For the first module of this project will we need  to accomplish the following:
<hr>
<h3>
1.Set up your system by downloading the necessary repository, files, tools and dependencies<br/>
2.Fix the broken client datafeed script in the repository by making the required adjustments to it.<br/>
3.Generate a patch file of the changes you made<br/>
4.Bonus task: Add unit tests in the test script in the repository.<br/>
</h3>
<hr>
<h1>Step1:Set up your system </h1>
 how to setup your enviroment for this task <a href="https://insidesherpa.s3.amazonaws.com/vinternships/companyassets/Sj7temL583QAYpHXD/setup_devenv_m1_v6.pdf" >Click Here</a> <br/>
 <hr>
 <h1>Step2:Fixing the broken clinet datafeed script</h1>
 
 Before fixing the client code we need to know what the code is actually doing there is 3 python file in the task
 <ol>
      <li>Server3.py</li>
      <li>Client3.py</li>
      <li>Client_test.py</li>
 </ol>
 So let's find what the file is doing <br/><br/>
 <ol>
     <li>Server3.py</li>
        This program is used to serve a stack market data to client by using HttpServer . It read the data from the excel file (test.excel) and send the data to 
        client3.py to know more read the source code<br/>
        <br/>
     <li>client3.py</li>
          This program  get the data from server3.py and calculate the trade price and ratio of two stack price.<br/>
          <br/>
          </ol>
      Before debug this program we need to Know about something  so it will easy for us to debug the code <br/>
                  <ol>
                  <li>Stack market</li>
                  First we need to know little bit about stack market for that i suggest some source below <br/>
                  <h5>Note:Few resource  in Tamil</h5>
 <a href="https://www.youtube.com/watch?v=RfOKl-ya5BY&t=804s"> Youtube video</a><br/>
 <a href="https://www.youtube.com/watch?v=0itXlKkGyJI"> Youtube video</a><br/>
 <a href="https://www.youtube.com/watch?v=Xn7KWR9EOGQ">Youtube video</a><br/><br/>
                  <li>bid price and ask price </li>
                   second we need to know about bid and ask in sharemarket.
                  <h5>bid</h5>
                  bid is the highest price an invester will to pay for the share 
                  <h5>ask</h5>
                  ask is the lowset price shareholder is willing to pay on shares<br/><br/>
                  if you still dont get it. read this example<br/><br/>
                  let consider a apple store he sell the apple for 200 rupess.the customer is ask apple for 160 rupess<br/><br/>
                  So the amount said by owner(200) is ask price<br/>
                  The amount said by customer(160) is bid price<br/><br/>
         so now you have some basic ideas about stack market it's time to debug the code 
         <br/>
<h3>First let's fix(debug) the getDataPoint function in client3.py</h3>
    This function used to seperate the data that get from the server.the data get from server look like this 
                   <br/>
                     <br/>
                   [{'id': '0.3597486737475911', 'stock': 'ABC', 'timestamp': '2019-02-10 10:07:43.237974', 'top_bid': {'price': 118.13, 'size': 145}, 'top_ask': {'price': 116.63, 'size': 31}}, {'id': '0.3597486737475911', 'stock': 'DEF', 'timestamp': '2019-02-10 10:07:43.237974', 'top_bid': {'price': 115.14, 'size': 12}, 'top_ask': {'price': 117.87, 'size': 3}}]
                   <br/>
                    <br/>
  the getDataPoint function code is<br/>
                   <pre>
                   def getDataPoint(quote):
                     """ Produce all of the needed values to generate a datapoint """
                     """ ------------- Update this function ------------- """
                     stock = quote['stock']
                     bid_price = float(quote['top_bid']['price'])
                     ask_price = float(quote['top_ask']['price'])
                     #to find Trade price adding bid_price and ask_price and divide it by 2
                     price =bid_price
                     return stock, bid_price, ask_price, price
                   </pre>
                   we need to debug this program  in this method we have to make the modifications to compute
for the right stock price. This means we have to change how `price` is computed
for. The formula is (bid_price+ask_price) / 2.
                   <br>
                   so now the code look like this 
                   <pre>
                   def getDataPoint(quote):
                     """ Produce all of the needed values to generate a datapoint """
                     """ ------------- Update this function ------------- """
                     stock = quote['stock']
                     bid_price = float(quote['top_bid']['price'])
                     ask_price = float(quote['top_ask']['price'])
                     #to find Trade price adding bid_price and ask_price and divide it by 2
                     price =( bid_price+ask_price)/2
                     return stock, bid_price, ask_price, price
 </pre>
          <h3> second d let's fix(debug) the main function </h3>
          the main function look like this 
          <pre>
          # Query the price once every N seconds.
          for _ in iter(range(N)):
           quotes = json.loads(urllib.request.urlopen(QUERY.format(random.random())).read())
           """ ----------- Update to get the ratio --------------- """
           for quote in quotes:
            stock, bid_price, ask_price, price = getDataPoint(quote)
            print ("Quoted %s at (bid:%s, ask:%s, price:%s)" % (stock, bid_price, ask_price, price))
            print ("Ratio %s" % getRatio(price, price))
           </pre>
           if you find anything wrong in this code if yes congrats
          <br/>
          <br/>
          if you see that we pass the same price from same stack(DEF) to getRatio function so we need to update this by using some datastructure you can use array or dictionary 
          i am going to use array so now the code is look like 
          <pre>
          # Query the price once every N seconds.
          #array used to store the prices of two different stack ("abc" "DEF")
          prices=[]
          for _ in iter(range(N)):
           quotes = json.loads(urllib.request.urlopen(QUERY.format(random.random())).read())
           """ ----------- Update to get the ratio --------------- """
           for quote in quotes:
            stock, bid_price, ask_price, price = getDataPoint(quote)
            print ("Quoted %s at (bid:%s, ask:%s, price:%s)" % (stock, bid_price, ask_price, price))
            #appending the prices to array 
            prices.append(price)
            print ("Ratio %s" % getRatio(prices[0], prices[1]))
            </pre>
    we fix most of the code 
    <br/>
    <h3>last let's fix(debug) the getRatio function in client3.py</h3>
    getRatio code is given below 
       <pre>
       def getRatio(price_a, price_b):
             """ Get ratio of price_a and price_b """
             """ ------------- Update this function ------------- """
             """ Also create some unit tests for this function in client_test.py """
             return 1
 </pre>
 
 did you see that this function always return 1 it is serious problem we need to fix this. we need to find ratio between price_a and price_b
 so the code look like this 
 <pre>
 def getRatio(price_a, price_b):
     """ Get ratio of price_a and price_b """
     """ ------------- Update this function ------------- """
     """ Also create some unit tests for this function in client_test.py """
     ratio=(price_a/price_b) 
     return ratio
 </pre>
 
 but still we have a problem what if the price_b is zero we have big serious problem.to fix this we need to check if the price_b is zero or not before divide
 so the code look like this
 <pre>
def getRatio(price_a, price_b):
  """ Get ratio of price_a and price_b """
  """ ------------- Update this function ------------- """
  """ Also create some unit tests for this function in client_test.py """
        #using ternary operator to avoid ZeroDivision error
  ratio=(price_a/price_b) if price_b>0 else  None
  return ratio
 </pre>
<hr>

<h1>step 3: Generate a patch file</h1>
Follow this steps to create patch file 

Fire up a terminal, enter the repository via the terminal you opened (via the cd
<repo_name_here> aka change directory command) and do the following commands
(one line, one command)<br/>
<ol>
<li>git add -A</li>
<li>git config user.email "<your_email_address>"</li>
<li>git config user.name "<your_name>"</li>
<li>git commit -m 'Create Patch File'</li>
<li>git format-patch -1 HEAD</li>
</ol>
<br/>
<br/>
The final command, i.e. git format-patch -1 HEAD, should produce the .patch file
you’d want to submit to complete this module. It will be located in the directory
where you executed the command.
<hr>

<h1>step 4: Bonus task Add unit tests in the test script in the repository</h1>

I going to give work for you so do it on your own <br/>
some resource may help you<br/> 
<a href="https://www.youtube.com/watch?v=6tNS--WetLI&t=1106s">youtube videos</a><br/>
<a href="https://www.youtube.com/watch?v=1Lfv5tUGsn8">youtube videos</a><br/>
<a href="https://www.youtube.com/watch?v=3kzHmaeozDI">youtube videos</a><br/>
<hr>
<h1>concluion:</h1>
 What are the things i learn from this task 
 <ol>
 <li> Stock Market Basic</li>
 <li> Unit Testing</li>
 </ol>
 
 </hr>
 
 
 
 
 
