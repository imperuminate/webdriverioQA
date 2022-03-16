# webdriverQA

## Commands
1. `git init` - Create git repository
2. `npm init` - Create **package.json** file 
3. `npm init wdio` - Create webdriverIO and setup **node_modules**
4. `npm run wdio` - Run tests 
5. `npx wdio run wdio.conf`  

<br/>
<br/>

## Selectors
`#id` - by id  
`.class` - by class  
`p:nth-child(1) a` - looks at the first 'p' element and does inside this element to the 'a' alement  
`*=Name` - by full or partial unique link name  
`a=Text` - by tag text  
`//*[@id="text"]` - difficult select by xPath  
`a[href="/logout"]` - by 'a' link tag and its link href adress. He says the it is CSS selector  
[https://webdriver.io/docs/selectors] - more info about selectors 
<br/>
<br/>

## Methods
`browser.url('')` - open specific page in the browser  
`.setValue('')` - insert value into the field  
`.clisk()` - press the button  
`.toBeExisting()` - check that the element is exist on the page  
`.toHaveTextContaining('')` - element contains specific text  
`browser.debug()` - stops all the tests, usefull when you nead to show some text in the consol  
`.scrollIntoView()` - scroll the page to show the element  
<br/>
<br/>

## Insights
async - add before callBack function in the 'it' block  
await - add before each method in the 'it' block. It wil wait till the right parts is done  
first of all, create const for each element   
POM - it is simply create selectors in the right page file   
get - creates property which will be as function, it will return some value when its called    


