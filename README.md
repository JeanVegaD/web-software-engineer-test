# Web Software Engineer Test

## About the Project

In the following test, a series of problems that web developers face every day will be exposed. With it, problem solving skills will be put to the test using the most advanced web technology, to give users the best possible experience.

## Table of Contents

## Installation

### Prerequisites

- `yarn`
- `git`
- `node.js`

### Installation Guide

1. Clone the repository

 ```bash
 git clone https://github.com/JeanVegaD/web-software-engineer-test.git
 ```

 2. Install yarn packages


 ```bash
 yarn install
 ```

 3. Run the project
 
 ```bash
 yarn start
 ```

## File Structure

```text 
 /web-software-engineer-test
 ├── public
 │ ├── index.html
 │ ├── logo192.png
 │ ├── logo512.png
 │ ├── robots.txt
 │ └── manifest.json
 ├── src
 │ ├── assets
 │ ├── components
 │ ├── pages
 │ ├── sampleData
 │ ├── styles
 │ ├── utils
 │ ├── index.css
 │ ├── index.js
 │ ├── reportWebVitals.js
 │ └── setUpTests.js
 ├── .gitignore
 ├── README.md
 ├── yarn.lock
 └── package.json
 ```

## Problem resolution

### Problem 1

#### Description

For this first problem, a function must be created, which receives as an argument an array of the following type: `[id, leftChild, rightChild]` and which returns parsed data as JSON.

**input:**

```json
 [1, [2], [3, null, [5]]] 
```

**Output:**
```json
{
    "id": 1,
    "left": {
        "id": 2
    },
    "right": {
        "id": 3,
        "left": null,
        "right": {
            "id": 5
        }
    }  
} 
```

#### Solution

To perform this conversion, the array underwent different steps to obtain the expected result::

1. Validate the syntax of the array.
2. Validate the structure of the array.
3. Convert the array to an object of type `NodeTree`.
4. Transform the object into a `JSON`.

**Restricciones**

The functions that analyze the structure of the expected array can receive the following data:

1. `[ string | number ]` 
2. `[ string | number, array ]`
2. `[ string | number, array | null, array ]`

#### Examples


### Problem 2

#### Description

This problem consists of creating a simple web page, which allows the user to make use of the functionality created in the previous problem.

In addition, an option is added where the result is displayed in JSON, which can be edited from this section to show a result on the screen in the form of squares that follows the structure of the tree created.

#### Solution

For this problem, a web page was created which has been very minimalist and which follows a very consistent design line.

The necessary visual validations are established to provide the user with a better experience when using the application.

This website design can be used on different devices, following the mobile-first methodology.

For the validation of the json file, a process very similar to that of problem 1 was used.

1. Validate the `JSON` syntax.
2. Validate the structure of the `JSON`.
3. Convert the `JSON` to an object of type` NodeTree`.
4. Return the object to the component in charge of painting the objects.

To visualize the output in the form of a tree, the created object is used and by means of a recursive function, the squares and their children are painted as the case may be.

#### Examples


### Problem 3

#### Description

Problem 3 consists of finding the deepest subtree of the tree and painting it in the output with a 2px green border.

#### Solution

For this problem a recursive function is used that finds and marks the deepest subtree within the object of type `NodeTree`.

The algorithm is as follows:

1. I position myself on a node.
2. I assign the depth of the node
3. I check if the node has children.
4. If the node has children
     - I define a temporary variable with each child of node `tempLeft` and` tempRight`
         - I repeat the process from step 1 with each child of the node, increasing the depth by 1.
         - In case the node does not have any children, the variable is assigned a `null`.
     - I compare the variables and return according to the case:
         - `tempLeft` is null return` tempRight`.
         - `tempRight` is null return` tempLeft`.
         - The depth of the `tempLeft` is equal to that of the` tempRight` return the current node.
         - The depth of the `tempLeft` is greater than that of the` tempRight` return the `tempLeft` node.
         - Otherwise return `tempRight`.
5. If it has no children, return the current node

At the end of this process, a label is assigned to the deepest node so that the rendering component can identify it and paint it as requested. 

#### Examples