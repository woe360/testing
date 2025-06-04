import { QuizQuestion } from '../types/quiz'

export const sampleQuestions: QuizQuestion[] = [
  // Chapter 1 - Fundamentals of Testing
  {
    id: '1',
    question: 'A bug or defect is:',
    options: [
      "a mistake made by a person",
      "a run-time problem experienced by a user",
      "the result of an error or mistake",
      "the result of a failure, which may lead to an error"
    ],
    correctAnswer: 2,
    explanation: "A defect is the result of an error or mistake made during development."
  },
  {
    id: '2',
    question: 'The effect of testing is to:',
    options: [
      "increase software quality",
      "give an indication of the software quality",
      "enable those responsible for software failures to be identified",
      "show there are no problems remaining"
    ],
    correctAnswer: 1,
    explanation: "Testing provides information about software quality, but doesn't directly increase it."
  },
  {
    id: '3',
    question: 'What is retesting?',
    options: [
      "Running the same test again in the same circumstances to reproduce the problem",
      "A cursory run through a test pack to see if any new errors have been introduced",
      "Checking that the predetermined exit criteria for the test phase have been met",
      "Running a previously failed test against new software/data/documents to see if the problem is solved"
    ],
    correctAnswer: 3,
    explanation: "Retesting is running a previously failed test to verify the fix works."
  },
  {
    id: '4',
    question: 'Which of the following is correct? Debugging is:',
    options: [
      "Testing/checking whether the software performs correctly",
      "Checking that a previously reported defect has been corrected",
      "Identifying the cause of a defect, repairing the code and checking the fix is correct",
      "Checking that no unintended consequences have occurred as a result of a fix"
    ],
    correctAnswer: 2,
    explanation: "Debugging involves finding, fixing, and verifying defect repairs."
  },
  {
    id: '5',
    question: 'Which of the following are aids to good communication, and which hinder it? (i) Try to understand how the other person feels (ii) Communicate personal feelings, concentrating upon individuals (iii) Confirm the other person has understood what you have said and vice versa (iv) Emphasise the common goal of better quality (v) Each discussion is a battle to be won',
    options: [
      "(i), (ii) and (iii) aid, (iv) and (v) hinder",
      "(iii), (iv) and (v) aid, (i) and (ii) hinder",
      "(i), (iii) and (iv) aid, (ii) and (v) hinder",
      "(ii), (iii) and (iv) aid, (i) and (v) hinder"
    ],
    correctAnswer: 2,
    explanation: "Understanding others, confirming understanding, and emphasizing common goals aid communication."
  },
  {
    id: '6',
    question: 'Which option is part of the \'implementation and execution\' area of the fundamental test process?',
    options: [
      "Developing the tests",
      "Comparing actual and expected results",
      "Writing a test summary",
      "Analysing lessons learnt for future releases"
    ],
    correctAnswer: 1,
    explanation: "Comparing actual and expected results happens during test execution."
  },
  {
    id: '7',
    question: 'The five parts of the fundamental test process have a broad chronological order. Which of the options gives three different parts in the correct order?',
    options: [
      "Implementation and execution, planning and control, analysis and design",
      "Analysis and design, evaluating exit criteria and reporting, test closure activities",
      "Evaluating exit criteria and reporting, implementation and execution, analysis and design",
      "Evaluating exit criteria and reporting, test closure activities, analysis and design"
    ],
    correctAnswer: 1,
    explanation: "The correct sequence is: planning → analysis and design → implementation and execution → evaluating exit criteria → test closure."
  },
  {
    id: '8',
    question: 'Which pair of definitions is correct?',
    options: [
      "Regression testing is checking that the reported defect has been fixed; retesting is testing that there are no additional problems in previously tested software",
      "Regression testing is checking there are no additional problems in previously tested software; retesting enables developers to isolate the problem",
      "Regression testing involves running all tests that have been run before; retesting runs new tests",
      "Regression testing is checking that there are no additional problems in previously tested software, retesting is demonstrating that the reported defect has been fixed"
    ],
    correctAnswer: 3,
    explanation: "Regression testing checks for unintended side effects; retesting confirms specific fixes work."
  },
  {
    id: '9',
    question: 'Which statement is most true?',
    options: [
      "Different testing is needed depending upon the application",
      "All software is tested in the same way",
      "A technique that finds defects will always find defects",
      "A technique that has found no defects is not useful"
    ],
    correctAnswer: 0,
    explanation: "Testing is context dependent - different applications require different testing approaches."
  },
  {
    id: '10',
    question: 'When is testing complete?',
    options: [
      "When time and budget are exhausted",
      "When there is enough information for sponsors to make an informed decision about release",
      "When there are no remaining high priority defects outstanding",
      "When every data combination has been exercised successfully"
    ],
    correctAnswer: 1,
    explanation: "Testing is complete when sufficient information is available for decision making."
  },
  {
    id: '11',
    question: 'Which list of levels of tester independence is in the correct order, starting with the most independent first?',
    options: [
      "Tests designed by the author; tests designed by another member of the development team; tests designed by someone from a different company",
      "Tests designed by someone from a different department within the company; tests designed by the author; tests designed by someone from a different company",
      "Tests designed by someone from a different company; tests designed by someone from a different department within the company; tests designed by another member of the development team",
      "Tests designed by someone from a different department within the company; tests designed by someone from a different company; tests designed by the author"
    ],
    correctAnswer: 2,
    explanation: "External company testers are most independent, followed by different department, then development team members."
  },
  {
    id: '12',
    question: 'The following statements relate to activities that are part of the fundamental test process. (i) Evaluating the testability of requirements (ii) Repeating testing activities after changes (iii) Designing the test environment set-up (iv) Developing and prioritising test cases (v) Verifying the environment is set up correctly. Which statement below is TRUE?',
    options: [
      "(i) and (ii) are part of analysis and design, (iii), (iv) and (v) are part of test implementation and execution",
      "(i) and (iii) are part of analysis and design, (ii), (iv) and (v) are part of test implementation and execution",
      "(i) and (v) are part of analysis and design, (ii), (iii) and (iv) are part of test implementation and execution",
      "(i) and (iv) are part of analysis and design, (ii), (iii) and (v) are part of test implementation and execution"
    ],
    correctAnswer: 3,
    explanation: "Evaluating testability and developing test cases are analysis/design activities."
  },
  {
    id: '13',
    question: 'Which statement correctly describes the public and profession aspects of the code of ethics?',
    options: [
      "Public: Certified software testers shall act in the best interests of their client and employer (being consistent with the wider public interest). Profession: Certified software testers shall advance the integrity and reputation of their industry consistent with the public interest.",
      "Public: Certified software testers shall advance the integrity and reputation of the profession consistent with the public interest. Profession: Certified software testers shall consider the wider public interest in their actions.",
      "Public: Certified software testers shall consider the wider public interest in their actions. Profession: Certified software testers shall participate in lifelong learning regarding the practice of their profession and shall promote an ethical approach to the practice of their profession.",
      "Public: Certified software testers shall consider the wider public interest in their actions. Profession: Certified software testers shall advance the integrity and reputation of their industry consistent with the public interest."
    ],
    correctAnswer: 3,
    explanation: "The Public aspect focuses on considering wider public interest, while Profession aspect focuses on advancing industry integrity and reputation."
  },

  // Chapter 2 - Testing Throughout the Software Lifecycle
  {
    id: '13',
    question: 'Which of the following is true about the V-model?',
    options: [
      "It has the same steps as the waterfall model for software development",
      "It is referred to as a cyclical model for software development",
      "It enables the production of a working version of the system as early as possible",
      "It enables test planning to start as early as possible"
    ],
    correctAnswer: 3,
    explanation: "The V-model enables early test planning by aligning test levels with development stages."
  },
  {
    id: '14',
    question: 'Which of the following is true of iterative development?',
    options: [
      "It uses fully defined specifications from the start",
      "It involves the users in the testing throughout",
      "Changes to the system do not need to be formally recorded",
      "It is not suitable for developing websites"
    ],
    correctAnswer: 1,
    explanation: "Iterative development involves users throughout the development and testing process."
  },
  {
    id: '15',
    question: 'Which of the following is in the correct order (typically)?',
    options: [
      "Unit testing, system testing, acceptance testing, maintenance testing",
      "System testing, unit testing, acceptance testing, maintenance testing",
      "Acceptance testing, system testing, maintenance testing, unit testing",
      "Unit testing, maintenance testing, system testing, acceptance testing"
    ],
    correctAnswer: 0,
    explanation: "The typical order is unit → integration → system → acceptance → maintenance testing."
  },
  {
    id: '16',
    question: 'Which of the following is usually the test basis for integration testing?',
    options: [
      "Program specification",
      "Functional specification",
      "Technical specification",
      "Requirement specification"
    ],
    correctAnswer: 2,
    explanation: "Integration testing is based on technical specifications showing component interactions."
  },
  {
    id: '17',
    question: 'A top-down development strategy affects which level of testing most?',
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "User acceptance testing"
    ],
    correctAnswer: 1,
    explanation: "Development strategy directly affects the order and approach of integration testing."
  },
  {
    id: '18',
    question: 'Which of the following is a non-functional requirement?',
    options: [
      "The system will enable users to buy books",
      "The system will allow users to return books",
      "The system will ensure security of the customer details",
      "The system will allow up to 100 users to log in at the same time"
    ],
    correctAnswer: 3,
    explanation: "Performance requirements (like concurrent user capacity) are non-functional."
  },
  {
    id: '19',
    question: 'Which of the following are examples of iterative development models? (i) V-model (ii) Rapid Application Development model (iii) Waterfall model (iv) Agile development model',
    options: [
      "(i) and (ii)",
      "(ii) and (iii)",
      "(ii) and (iv)",
      "(iii) and (iv)"
    ],
    correctAnswer: 2,
    explanation: "RAD and Agile are iterative models that deliver working software incrementally."
  },
  {
    id: '20',
    question: 'Which of the following statements are true? (i) For every development activity there is a corresponding testing activity (ii) Each test level has the same test objectives (iii) The analysis and design of tests for a given test level should begin after the corresponding development activity (iv) Testers should be involved in reviewing documents as soon as drafts are available in the development life cycle',
    options: [
      "(i) and (ii)",
      "(iii) and (iv)",
      "(ii) and (iii)",
      "(i) and (iv)"
    ],
    correctAnswer: 3,
    explanation: "Each development activity has corresponding testing, and testers should be involved early in reviews."
  },
  {
    id: '21',
    question: 'Which of the following is not true of regression testing?',
    options: [
      "It can be carried out at each stage of the life cycle",
      "It serves to demonstrate that the changed software works as intended",
      "It serves to demonstrate that software has not been unintentionally changed",
      "It is often automated"
    ],
    correctAnswer: 1,
    explanation: "Regression testing checks for unintended changes, not that changes work as intended (that's confirmation testing)."
  },

  // Chapter 3 - Static Testing
  {
    id: '22',
    question: 'One of the roles in a review is that of moderator, which of the following best describes this role?',
    options: [
      "Plans the review, runs the review meeting and ensures that follow-up activities are completed",
      "Allocates time in the plan, decides which reviews will take place and that the benefits are delivered",
      "Writes the document to be reviewed, agrees that the document can be reviewed, and updates the document with any changes",
      "Documents all issues raised in the review meeting, records problems and open points"
    ],
    correctAnswer: 0,
    explanation: "The moderator plans, runs, and follows up on review meetings."
  },
  {
    id: '23',
    question: 'Which of the following statements are correct for walkthroughs? (i) Often led by the author (ii) Documented and defined results (iii) All participants have defined roles (iv) Used to aid learning (v) Main purpose is to find defects',
    options: [
      "(i) and (v) are correct",
      "(ii) and (iii) are correct",
      "(i) and (iv) are correct",
      "(iii) and (iv) are correct"
    ],
    correctAnswer: 2,
    explanation: "Walkthroughs are often led by the author and used primarily for learning purposes."
  },
  {
    id: '24',
    question: 'What do static analysis tools analyse?',
    options: [
      "Design",
      "Test cases",
      "Requirements",
      "Program code"
    ],
    correctAnswer: 3,
    explanation: "Static analysis tools analyze program code without executing it."
  },
  {
    id: '25',
    question: 'Which of the following is most likely to be a benefit of using static techniques?',
    options: [
      "Fewer performance defects",
      "Productivity improvements in the development process",
      "More efficient regression testing",
      "Quick return on investment in static analysis tools"
    ],
    correctAnswer: 1,
    explanation: "Static techniques improve development productivity by finding defects early."
  },
  {
    id: '26',
    question: 'Which of the following has the typical formal review activities in the correct sequence?',
    options: [
      "Kick-off, review meeting, planning, follow-up",
      "Kick-off, planning, review meeting, re-work",
      "Planning, kick-off, individual preparation, review meeting",
      "Planning, individual preparation, follow-up, re-work"
    ],
    correctAnswer: 2,
    explanation: "The correct sequence is: planning → kick-off → individual preparation → review meeting."
  },
  {
    id: '27',
    question: 'Which of the following statements are true? (i) Defects are likely to be found earlier in the development process by using reviews rather than static analysis (ii) Walkthroughs require code but static analysis does not require code (iii) Informal reviews can be performed on code and specifications (iv) Dynamic techniques are generally used before static techniques (v) Dynamic techniques can only be used after code is ready to be executed',
    options: [
      "(i), (ii), (vi)",
      "(ii), (iii), (v)",
      "(i), (iv), (v)",
      "(i), (iii), (v)"
    ],
    correctAnswer: 3,
    explanation: "Reviews find defects early, informal reviews work on any document, and dynamic techniques need executable code."
  },
  {
    id: '28',
    question: 'Which of the following are static techniques?',
    options: [
      "Walkthrough",
      "State transition testing",
      "Decision table testing",
      "Statement testing"
    ],
    correctAnswer: 0,
    explanation: "Walkthrough is a static technique that doesn't execute code."
  },
  {
    id: '29',
    question: 'Which one of the following roles is typically used in a review?',
    options: [
      "Champion",
      "Author",
      "Project sponsor",
      "Custodian"
    ],
    correctAnswer: 1,
    explanation: "The author is a standard role in formal reviews."
  },
  {
    id: '30',
    question: 'Which of the following is most likely to be performed by developers?',
    options: [
      "Technical review of a functional specification",
      "Walkthrough of a requirements document",
      "Informal review of a program specification",
      "Static analysis of a software model"
    ],
    correctAnswer: 3,
    explanation: "Static analysis requires deep technical knowledge that developers possess."
  },

  // Chapter 4 - Test Design Techniques
  {
    id: '31',
    question: 'Which of the following defines the expected result of a test?',
    options: [
      "Test case",
      "Test procedure",
      "Test execution schedule",
      "Test condition"
    ],
    correctAnswer: 0,
    explanation: "A test case includes the expected result for the test."
  },
  {
    id: '32',
    question: 'Which of the following are most characteristic of structure-based testing? (i) Information about how the software is constructed is used to derive test cases (ii) Statement coverage and/or decision coverage can be measured for existing test cases (iii) The knowledge and experience of people are used to derive test cases (iv) Test cases are derived from a model or specification of the system',
    options: [
      "(i) and (ii)",
      "(ii) and (iii)",
      "(ii) and (iv)",
      "(i) and (iii)"
    ],
    correctAnswer: 0,
    explanation: "Structure-based testing uses software construction information and measures coverage."
  },
  {
    id: '33',
    question: 'A system is designed to accept values of examination marks as follows: Fail 0–39 inclusive, Pass 40–59 inclusive, Merit 60–79 inclusive, Distinction 80–100 inclusive. In which of the following sets of values are all values in different equivalence partitions?',
    options: [
      "25, 40, 60, 75",
      "0, 45, 79, 87",
      "35, 40, 59, 69",
      "25, 39, 60, 81"
    ],
    correctAnswer: 1,
    explanation: "Each value (0, 45, 79, 87) falls in a different partition: Fail, Pass, Merit, Distinction."
  },
  {
    id: '34',
    question: 'Which of the following describes structure-based (white-box) test case design techniques?',
    options: [
      "Test cases are derived systematically from models of the system",
      "Test cases are derived systematically from the tester's experience",
      "Test cases are derived systematically from the delivered code",
      "Test cases are derived from the developers' experience"
    ],
    correctAnswer: 2,
    explanation: "White-box techniques derive test cases from the internal code structure."
  },
  {
    id: '35',
    question: 'Which of the following is a structure-based (white-box) technique?',
    options: [
      "Decision table testing",
      "State transition testing",
      "Statement testing",
      "Boundary value analysis"
    ],
    correctAnswer: 2,
    explanation: "Statement testing is a white-box technique that measures code coverage."
  },
  {
    id: '36',
    question: 'A washing machine has three temperature bands for different kinds of fabrics: fragile fabrics are washed at temperatures between 15 and 30 degrees Celsius; normal fabrics are washed at temperatures between 31 and 60 degrees Celsius; heavily soiled and tough fabrics are washed at temperatures between 61 and 100 degrees Celsius. Which of the following contains only values that are in different equivalence partitions?',
    options: [
      "15, 30, 60",
      "20, 35, 60",
      "25, 45, 75",
      "12, 35, 55"
    ],
    correctAnswer: 2,
    explanation: "25 (fragile), 45 (normal), and 75 (tough) each fall in different temperature bands."
  },
  {
    id: '37',
    question: 'Consider the following pseudo code: 1 Begin 2 Read Time 3 If Time < 12 Then 4 Print(Time, "am") 5 Endif 6 If Time > 12 Then 7 Print(Time -12, "pm") 8 Endif 9 If Time = 12 Then 10 Print (Time, "noon") 11 Endif 12 End. How many test cases are needed to achieve 100 per cent decision coverage?',
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 2,
    explanation: "Three test cases needed: Time < 12, Time > 12, and Time = 12 to cover all decision outcomes."
  },
  {
    id: '38',
    question: 'Using the same pseudo code, if the test cases Time = 11 and Time = 15 were input, what level of decision coverage would be achieved?',
    options: [
      "100% or 6/6",
      "50% or 3/6",
      "67% or 4/6",
      "83% or 5/6"
    ],
    correctAnswer: 2,
    explanation: "Time=11 covers 2 decisions (true, false, false), Time=15 covers 2 decisions (false, true, false). Total 4 out of 6 decision outcomes = 67%."
  },
  {
    id: '39',
    question: 'What is the main purpose of use case testing?',
    options: [
      "To identify defects in process flows related to typical use of the system",
      "To identify defects in the connections between components",
      "To identify defects in the system related to extreme scenarios",
      "To identify defects in the system related to the use of unapproved programming practices"
    ],
    correctAnswer: 0,
    explanation: "Use case testing focuses on typical user scenarios and process flows."
  },
  {
    id: '40',
    question: 'Which of the following are the most important factors to be taken into account when selecting test techniques? (i) Tools available (ii) Regulatory standards (iii) Experience of the development team (iv) Knowledge of the test team (v) The need to maintain levels of capability in each technique',
    options: [
      "(i) and (ii)",
      "(ii) and (iv)",
      "(iii) and (iv)",
      "(i) and (v)"
    ],
    correctAnswer: 1,
    explanation: "Regulatory standards and test team knowledge are key factors in technique selection."
  },

  // Chapter 5 - Test Management
  {
    id: '41',
    question: 'What is the purpose of exit criteria?',
    options: [
      "To identify how many tests to design",
      "To identify when to start testing",
      "To identify when to stop testing",
      "To identify who will carry out the test execution"
    ],
    correctAnswer: 2,
    explanation: "Exit criteria define the conditions for stopping testing activities."
  },
  {
    id: '42',
    question: 'Which of the following are most likely to be used when developing a test strategy or test approach? (i) Failure-based approach (ii) Test specification approach (iii) Model-based approach (iv) Finance-based approach',
    options: [
      "(iii) and (ii)",
      "(i) and (iv)",
      "(ii) and (i)",
      "(i) and (iii)"
    ],
    correctAnswer: 3,
    explanation: "Failure-based and model-based approaches are common test strategy methodologies."
  },
  {
    id: '43',
    question: 'What can a risk-based approach to testing provide?',
    options: [
      "The types of test techniques to be employed",
      "The total tests needed to provide 100 per cent coverage",
      "An estimation of the total cost of testing",
      "Only that test execution is effective at reducing risk"
    ],
    correctAnswer: 0,
    explanation: "Risk-based testing helps determine appropriate test techniques based on risk levels."
  },
  {
    id: '44',
    question: 'When assembling a test team to work on an enhancement to an existing system, which of the following has the highest level of test independence?',
    options: [
      "A business analyst who wrote the original requirements for the system",
      "A permanent programmer who reviewed some of the new code, but has not written any of it",
      "A permanent tester who found most defects in the original system",
      "A contract tester who has never worked for the organisation before"
    ],
    correctAnswer: 3,
    explanation: "An external contractor with no prior knowledge has the highest independence."
  },
  {
    id: '45',
    question: 'What test roles (or parts in the testing process) is a developer most likely to perform? (i) Executing component integration tests (ii) Static analysis (iii) Setting up the test environment (iv) Deciding how much testing should be automated',
    options: [
      "(i) and (ii)",
      "(i) and (iv)",
      "(ii) and (iii)",
      "(iii) and (iv)"
    ],
    correctAnswer: 0,
    explanation: "Developers typically perform component integration testing and static analysis."
  },
  {
    id: '46',
    question: 'Which of the following are valid justifications for developers testing their own code during unit testing? (i) Their lack of independence is mitigated by independent testing during system and acceptance testing (ii) A person with a good understanding of the code can find more defects more quickly using white-box techniques (iii) Developers have a better understanding of the requirements than testers (iv) Testers write unnecessary incident reports because they find minor differences between the way in which the system behaves and the way in which it is specified to work',
    options: [
      "(i) and (ii)",
      "(i) and (iv)",
      "(ii) and (iii)",
      "(iii) and (iv)"
    ],
    correctAnswer: 0,
    explanation: "Developer unit testing is justified by later independent testing and their code knowledge."
  },
  {
    id: '47',
    question: 'Which of the following terms is used to describe the management of software components comprising an integrated system?',
    options: [
      "Configuration management",
      "Incident management",
      "Test monitoring",
      "Risk management"
    ],
    correctAnswer: 0,
    explanation: "Configuration management handles versioning and control of software components."
  },
  {
    id: '48',
    question: 'A new system is about to be developed. Which of the following functions has the highest level of risk?',
    options: [
      "likelihood of failure = 20%; impact value = £100,000",
      "likelihood of failure = 10%; impact value = £150,000",
      "likelihood of failure = 1%; impact value = £500,000",
      "likelihood of failure = 2%; impact value = £200,000"
    ],
    correctAnswer: 0,
    explanation: "Risk = likelihood × impact. Option a: 20% × £100,000 = £20,000 (highest)."
  },
  {
    id: '49',
    question: 'Which of the following statements about risks is most accurate?',
    options: [
      "Project risks rarely affect product risk",
      "Product risks rarely affect project risk",
      "A risk-based approach is more likely to be used to mitigate product rather than project risks",
      "A risk-based approach is more likely to be used to mitigate project rather than product risks"
    ],
    correctAnswer: 2,
    explanation: "Risk-based testing primarily focuses on mitigating product risks through testing."
  },

  // Chapter 6 - Tool Support for Testing
  {
    id: '50',
    question: 'Which of the following pairs of test tools are likely to be most useful during the test analysis and design stage of the fundamental test process? (i) Test execution tool (ii) Test data preparation tool (iii) Test management tool (iv) Requirements management tool',
    options: [
      "(i) and (ii)",
      "(i) and (iv)",
      "(ii) and (iii)",
      "(iii) and (iv)"
    ],
    correctAnswer: 3,
    explanation: "Test management and requirements management tools are most useful during analysis and design."
  },
  {
    id: '51',
    question: 'Which of the following is most likely to cause failure in the implementation of a test tool?',
    options: [
      "Underestimating the demand for a tool",
      "The purchase price of the tool",
      "No agreed requirements for the tool",
      "The cost of resources to implement and maintain the tool"
    ],
    correctAnswer: 2,
    explanation: "Lack of agreed requirements is the most common cause of tool implementation failure."
  },
  {
    id: '52',
    question: 'What benefits do static analysis tools have over test execution tools?',
    options: [
      "Static analysis tools find defects earlier in the life cycle",
      "Static analysis tools can be used before code is written",
      "Static analysis tools test that the delivered code meets business requirements",
      "Static analysis tools are particularly effective for regression testing"
    ],
    correctAnswer: 0,
    explanation: "Static analysis can find defects early, even before code compilation."
  },
  {
    id: '53',
    question: 'For which of the following activities in the fundamental test process would an incident management tool be most useful?',
    options: [
      "Test planning and control",
      "Test analysis and design",
      "Test implementation and execution",
      "Evaluating exit criteria and reporting"
    ],
    correctAnswer: 2,
    explanation: "Incident management tools are most useful when defects are found during execution."
  },
  {
    id: '54',
    question: 'Which of the following principles should be followed when introducing a test tool into an organisation? (i) Assessing organisational maturity to establish whether a tool will provide expected benefits (ii) Requiring a quick payback on the initial investment (iii) Including a requirement for the tool to be easy to use without having to train unskilled testers (iv) Identifying and agreeing requirements before evaluating test tools',
    options: [
      "Assess maturity and define requirements first",
      "Assess maturity and expect quick returns",
      "Quick returns and minimal training needs",
      "Minimal training and clear requirements"
    ],
    correctAnswer: 0,
    explanation: "Organizational maturity assessment and agreed requirements are essential for tool success."
  },
  {
    id: '55',
    question: 'Which of the following defects is most likely to be found by a test harness?',
    options: [
      "Variance from programming standards",
      "A defect in middleware",
      "Memory leaks",
      "Regression defects"
    ],
    correctAnswer: 1,
    explanation: "Test harnesses are particularly effective at finding middleware integration defects."
  },
  {
    id: '56',
    question: 'How can test execution tools be of most benefit during exploratory testing?',
    options: [
      "They can record user actions so that defects are easier to recreate",
      "They can be used to perform the regression aspects of exploratory testing",
      "They can help to mitigate the risk of low test coverage",
      "They can use data-driven tests to increase the amount of exploratory testing performed"
    ],
    correctAnswer: 0,
    explanation: "Recording user actions helps recreate defects found during exploratory testing."
  },
  {
    id: '57',
    question: 'Which of the following types of test tool are most likely to include traceability functions? (i) Performance testing tool (ii) Requirements management tool (iii) Configuration management tool (iv) Static analysis tool',
    options: [
      "(i) and (ii)",
      "(i) and (iv)",
      "(ii) and (iii)",
      "(iii) and (iv)"
    ],
    correctAnswer: 2,
    explanation: "Requirements and configuration management tools need traceability for tracking relationships."
  },
  {
    id: '58',
    question: 'A test management tool is most likely to integrate with which of the following tools?',
    options: [
      "Performance testing tool",
      "Test data preparation tool",
      "Static analysis tool",
      "Requirements management tool"
    ],
    correctAnswer: 3,
    explanation: "Test management tools commonly integrate with requirements management tools for traceability."
  }
]