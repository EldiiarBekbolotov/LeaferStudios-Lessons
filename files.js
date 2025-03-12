/**
*	Lesson files for https://leaferstudioslessons.netlify.app/
**/
var articles = [
	{
		title: "2.0 Java Fundamentals (11 March 2025)",
		content: "The history and fundamentals of the Java language",
			type: "Tutorial",
	},
	{
		title: "2.1 History",
 	content: `FORTRAN, COBOL, and BASIC were either efficient but complex and maintainable, or easy to learn but not efficient.`,
  	type: "Article",
   	by: "LeaferStudios",
    	date: "11 March 2025",
	},
{
	title: "1.0 C++ and Competitive Programming (8 March 2025)",
	content: "Today, LeaferStudios Lessons has been released to for the Khan Academy community! Visit Lesson 1.1 for more information about the C++ series.",
	type: "Tutorial",
}, 
	{
		title: "1.2 ",
	},
{
	title: "1.1 Introduction",
	content: `
<p>C++ is fast, efficient, and the most common language used in informatics contests such as the International Olympiad in Informatics (IOI), "the most prestigious computer science olympiad for secondary school students.". For Khan Academy users who are familiar with web development and JavaScript and are looking to become better competitive programmers, this means learning C++. JavaScript is not allowed in the IOI. Bjarne Stroustrup first released C++ in 1985, and it underwent several major updates, including one in 2023. If you are familiar with C, it will make learning C++ much easier because C++ is an extension (direct descendant) of the C language.</p>
<p>I will not be going over setup of C++ in this article. If you don't have a place to run the code, like an Integrated Development Environment, you can check out the instructions on the CPlusPlus website.</p>
<h2>The Basics</h2>
<p><pre><code>#include &lt;iostream&gt
using namespace std;

int main() {
	cout &lt;&lt; "Hi";
	return 0;
}
</code></pre>

<p>The code snippet above will print "Hi" in the terminal.</p>
<p><code>#include &lt;iostream&gt</code></p><li>This is a preprocessor directive (starts with a # sign, basically gives instructions to the preprocessor). You do not need to end it with a semicolon, as the preprocessor directive is only 1 line and C++ knows that. There are different types of preprocessor directives but we will not be talking about them in this article. <code>&lt;iostream&gt;</code> is an input/output stream library which allows us to use commands like <code>cout</code> to print output to the terminal.</li>
<p><code>using namespace std;</code></p>
<li>This tells the compiler that we are using the C++ standard (std) library. Without it, we would have to write <code>std::cout</code> instead of <code>cout</code>.</li>
<p><pre><code>int main() {
    cout << "Hi";
    return 0;
}</code></pre></p>
<li>The first line creates a function <code>main</code>. It is the entry point to all C++ programs, and is called at program startup. C++ programs can have many different functions, but the entry point is the <code>main</code> function. You don't have to use <code>int</code> to create a function (it is based on what the function is returning, in our case an integer, 0), more on that later. The second line prints the text "Hi", using <code>cout</code> (the standard output stream which we imported using <code>iostream</code>). The <code>&lt;&lt;</code> is called an insertion operator used to send bytes ("Hi") to the output stream. All the third line does is return 0 to the operation system, which tells that the program has finished running successfully. Even if the third line was missing, the compiler would still automatically assume it, but it is good practice to include especially as you are starting out.</li>

<p>All in all, here is a recap of our basic C++ program: </br></br><pre><code>#include &lt;iostream&gt;   // Including the input/output stream library
using namespace std;  // Using the standard namespace

int main() {          // main() is the entry point of the program
    cout &lt;&lt; "Hi";     // Prints "Hi" to the terminal
    return 0;         // Returns 0 to indicate successful execution
}
</code></pre></p>

<p>For my readers from Khan Academy, keep in mind that:</p>

<ul>
<li>JavaScript is a dynamically typed language, which means that a <code>var, let, const</code> can be many things like strings, arrays, and so on. C++ is statically typed, meaning that you will have to declare variable types.</li>
</ul>

 `,
	type: "Article",
	by: "LeaferStudios",
	date: "8 March 2025",
},
/*
{
	title: "",
 	content: ``,
  	type: "Article",
   	by: "LeaferStudios",
    	date: "",
},
*/
];
