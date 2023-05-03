---
# These are optional elements. Feel free to remove any of them.
status: Accepted
date: 2023-05-03
deciders: Christian, Samuel, Joshua, Abijit, Khanh, Nakul, Helen, Brandon, Ezgi, and Michi
consulted: Nobody
informed: Everyone
---
# ADR 2: Do Not Allow User-Inputted Questions

## Context and Problem Statement

Within the scope of fortune telling, there are times where users will ask a fortune teller a question and times that a fortune teller will just provide a future outcome based on some parameters. It must decided whether or not to allow our fortune telling app to take user-inputted questions.


## Considered Options

* Yes, take user-inputted questions
* No, do not take user-inputted questions

## Decision Outcome

**Chosen option:** We will not allow user-inputted questions

## Rationale
To restrict the scope of our app, it is easier to not allow user-inputted questions. This is because pre-generated answers in our backend will not make sense with user-inputted questions due to the range of questions, and we do not see it feasible to figure out a way to restrict the scope of questions. Providing a fortune based off of a chosen category is easier and will allow for a more streamlined experience.

## Other Information
In short, we will generate a fortune based off of a user's selected category.