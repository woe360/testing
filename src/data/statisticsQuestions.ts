import { QuizQuestion } from '../types/quiz'

export const statisticsQuestions: QuizQuestion[] = [
  // Chapter 1 - Descriptive Statistics
  {
    id: 'stat_1',
    question: 'What is the primary purpose of descriptive statistics?',
    options: [
      "To make predictions about future data",
      "To summarize and describe data characteristics",
      "To test hypotheses about populations",
      "To establish causal relationships"
    ],
    correctAnswer: 1,
    explanation: "Descriptive statistics are used to summarize and describe the main features of data.",
    chapter: 1
  },
  {
    id: 'stat_2',
    question: 'Which measure of central tendency is most affected by outliers?',
    options: [
      "Mean",
      "Median", 
      "Mode",
      "Range"
    ],
    correctAnswer: 0,
    explanation: "The mean is most sensitive to outliers because it includes all values in its calculation.",
    chapter: 1
  },
  {
    id: 'stat_3',
    question: 'What does the standard deviation measure?',
    options: [
      "The center of the distribution",
      "The spread or variability of data",
      "The shape of the distribution",
      "The relationship between variables"
    ],
    correctAnswer: 1,
    explanation: "Standard deviation measures how spread out data points are from the mean.",
    chapter: 1
  },
  {
    id: 'stat_4',
    question: 'In a normal distribution, approximately what percentage of data falls within two standard deviations of the mean?',
    options: [
      "68%",
      "95%",
      "99.7%",
      "50%"
    ],
    correctAnswer: 1,
    explanation: "In a normal distribution, approximately 95% of data falls within two standard deviations of the mean.",
    chapter: 1
  },
  {
    id: 'stat_5',
    question: 'What type of graph is best for displaying the relationship between two continuous variables?',
    options: [
      "Bar chart",
      "Histogram",
      "Scatter plot",
      "Pie chart"
    ],
    correctAnswer: 2,
    explanation: "Scatter plots are ideal for showing relationships between two continuous variables.",
    chapter: 1
  },

  // Chapter 2 - Probability Theory
  {
    id: 'stat_6',
    question: 'What is the probability of getting heads when flipping a fair coin?',
    options: [
      "0.25",
      "0.5",
      "0.75",
      "1.0"
    ],
    correctAnswer: 1,
    explanation: "A fair coin has equal probability (0.5) for heads or tails.",
    chapter: 2
  },
  {
    id: 'stat_7',
    question: 'If two events A and B are independent, then P(A and B) equals:',
    options: [
      "P(A) + P(B)",
      "P(A) × P(B)",
      "P(A) - P(B)",
      "P(A) / P(B)"
    ],
    correctAnswer: 1,
    explanation: "For independent events, the probability of both occurring is the product of their individual probabilities.",
    chapter: 2
  },
  {
    id: 'stat_8',
    question: 'What is Bayes\' theorem used for?',
    options: [
      "Calculating compound interest",
      "Finding conditional probabilities",
      "Measuring central tendency",
      "Testing for normality"
    ],
    correctAnswer: 1,
    explanation: "Bayes\' theorem is used to find conditional probabilities given prior information.",
    chapter: 2
  },
  {
    id: 'stat_9',
    question: 'In a standard deck of 52 cards, what is the probability of drawing a red card?',
    options: [
      "1/4",
      "1/3",
      "1/2",
      "2/3"
    ],
    correctAnswer: 2,
    explanation: "There are 26 red cards (hearts and diamonds) out of 52 total cards, so P = 26/52 = 1/2.",
    chapter: 2
  },
  {
    id: 'stat_10',
    question: 'What does the law of large numbers state?',
    options: [
      "Large samples always give accurate results",
      "Sample statistics approach population parameters as sample size increases",
      "Probability decreases with larger numbers",
      "Large datasets are always normally distributed"
    ],
    correctAnswer: 1,
    explanation: "The law of large numbers states that sample statistics converge to population parameters as sample size increases.",
    chapter: 2
  },

  // Chapter 3 - Sampling and Distributions
  {
    id: 'stat_11',
    question: 'What is the main advantage of random sampling?',
    options: [
      "It guarantees a representative sample",
      "It eliminates all bias",
      "It gives every member of the population an equal chance of being selected",
      "It is the cheapest sampling method"
    ],
    correctAnswer: 2,
    explanation: "Random sampling ensures each population member has an equal probability of selection.",
    chapter: 3
  },
  {
    id: 'stat_12',
    question: 'According to the Central Limit Theorem, the sampling distribution of the mean approaches what shape as sample size increases?',
    options: [
      "Uniform",
      "Exponential",
      "Normal",
      "Skewed"
    ],
    correctAnswer: 2,
    explanation: "The Central Limit Theorem states that sampling distributions of means approach normality regardless of population shape.",
    chapter: 3
  },
  {
    id: 'stat_13',
    question: 'What happens to the standard error as sample size increases?',
    options: [
      "It increases",
      "It decreases",
      "It stays the same",
      "It becomes negative"
    ],
    correctAnswer: 1,
    explanation: "Standard error decreases as sample size increases, following the formula SE = σ/√n.",
    chapter: 3
  },
  {
    id: 'stat_14',
    question: 'Which type of sampling involves dividing the population into groups and then randomly selecting groups?',
    options: [
      "Stratified sampling",
      "Cluster sampling",
      "Systematic sampling",
      "Convenience sampling"
    ],
    correctAnswer: 1,
    explanation: "Cluster sampling involves randomly selecting entire groups (clusters) from the population.",
    chapter: 3
  },
  {
    id: 'stat_15',
    question: 'What is the z-score of a value that is equal to the mean?',
    options: [
      "-1",
      "0",
      "1",
      "It depends on the standard deviation"
    ],
    correctAnswer: 1,
    explanation: "A z-score of 0 indicates the value is exactly at the mean.",
    chapter: 3
  },

  // Chapter 4 - Confidence Intervals
  {
    id: 'stat_16',
    question: 'What does a 95% confidence interval mean?',
    options: [
      "95% of the data falls within this interval",
      "There is a 95% chance the population parameter is in this interval",
      "95% of all possible confidence intervals contain the population parameter",
      "The sample mean is 95% accurate"
    ],
    correctAnswer: 2,
    explanation: "A 95% confidence level means that 95% of all possible confidence intervals would contain the true population parameter.",
    chapter: 4
  },
  {
    id: 'stat_17',
    question: 'What happens to the width of a confidence interval when the confidence level increases?',
    options: [
      "It becomes narrower",
      "It becomes wider",
      "It stays the same",
      "It depends on the sample size"
    ],
    correctAnswer: 1,
    explanation: "Higher confidence levels require wider intervals to maintain the specified confidence.",
    chapter: 4
  },
  {
    id: 'stat_18',
    question: 'Which factor does NOT affect the width of a confidence interval?',
    options: [
      "Sample size",
      "Confidence level",
      "Population standard deviation",
      "Population size (when population is large)"
    ],
    correctAnswer: 3,
    explanation: "For large populations, the population size does not affect confidence interval width.",
    chapter: 4
  },
  {
    id: 'stat_19',
    question: 'When should you use a t-distribution instead of a z-distribution for confidence intervals?',
    options: [
      "When the sample size is large",
      "When the population standard deviation is unknown",
      "When the data is normally distributed",
      "When you want a 95% confidence level"
    ],
    correctAnswer: 1,
    explanation: "Use t-distribution when the population standard deviation is unknown and must be estimated from the sample.",
    chapter: 4
  },
  {
    id: 'stat_20',
    question: 'What is the margin of error in a confidence interval?',
    options: [
      "The difference between the upper and lower bounds",
      "Half the width of the confidence interval",
      "The probability of making an error",
      "The sample standard deviation"
    ],
    correctAnswer: 1,
    explanation: "The margin of error is half the width of the confidence interval, extending from the point estimate to either bound.",
    chapter: 4
  },

  // Chapter 5 - Hypothesis Testing
  {
    id: 'stat_21',
    question: 'What is a Type I error in hypothesis testing?',
    options: [
      "Failing to reject a false null hypothesis",
      "Rejecting a true null hypothesis",
      "Accepting the alternative hypothesis when it is false",
      "Using the wrong test statistic"
    ],
    correctAnswer: 1,
    explanation: "A Type I error occurs when we reject a null hypothesis that is actually true.",
    chapter: 5
  },
  {
    id: 'stat_22',
    question: 'What does the p-value represent?',
    options: [
      "The probability that the null hypothesis is true",
      "The probability of observing the data given that the null hypothesis is true",
      "The probability that the alternative hypothesis is true",
      "The probability of making a Type II error"
    ],
    correctAnswer: 1,
    explanation: "The p-value is the probability of observing the test statistic or more extreme values, assuming the null hypothesis is true.",
    chapter: 5
  },
  {
    id: 'stat_23',
    question: 'If the p-value is less than the significance level (α), what should you do?',
    options: [
      "Accept the null hypothesis",
      "Reject the null hypothesis",
      "Collect more data",
      "Change the significance level"
    ],
    correctAnswer: 1,
    explanation: "When p-value < α, we reject the null hypothesis in favor of the alternative hypothesis.",
    chapter: 5
  },
  {
    id: 'stat_24',
    question: 'What is statistical power?',
    options: [
      "The probability of rejecting a true null hypothesis",
      "The probability of accepting a false null hypothesis",
      "The probability of rejecting a false null hypothesis",
      "The probability of accepting a true null hypothesis"
    ],
    correctAnswer: 2,
    explanation: "Statistical power is the probability of correctly rejecting a false null hypothesis (1 - β).",
    chapter: 5
  },
  {
    id: 'stat_25',
    question: 'In a two-tailed test with α = 0.05, what are the critical values for a z-test?',
    options: [
      "±1.645",
      "±1.96",
      "±2.576",
      "±2.33"
    ],
    correctAnswer: 1,
    explanation: "For a two-tailed test with α = 0.05, the critical z-values are ±1.96.",
    chapter: 5
  },

  // Chapter 6 - Regression Analysis
  {
    id: 'stat_26',
    question: 'What does the correlation coefficient (r) measure?',
    options: [
      "The strength of a linear relationship between two variables",
      "The slope of the regression line",
      "The y-intercept of the regression line",
      "The amount of variation explained by the model"
    ],
    correctAnswer: 0,
    explanation: "The correlation coefficient measures the strength and direction of a linear relationship between two variables.",
    chapter: 6
  },
  {
    id: 'stat_27',
    question: 'What does R² (coefficient of determination) represent?',
    options: [
      "The correlation between X and Y",
      "The slope of the regression line",
      "The proportion of variance in Y explained by X",
      "The standard error of the estimate"
    ],
    correctAnswer: 2,
    explanation: "R² represents the proportion of variance in the dependent variable explained by the independent variable(s).",
    chapter: 6
  },
  {
    id: 'stat_28',
    question: 'In simple linear regression, what does the slope coefficient represent?',
    options: [
      "The value of Y when X equals zero",
      "The change in Y for a one-unit change in X",
      "The correlation between X and Y",
      "The standard error of the regression"
    ],
    correctAnswer: 1,
    explanation: "The slope coefficient represents the expected change in the dependent variable for a one-unit change in the independent variable.",
    chapter: 6
  },
  {
    id: 'stat_29',
    question: 'What assumption is violated if residuals show a clear pattern when plotted against fitted values?',
    options: [
      "Normality of residuals",
      "Independence of residuals",
      "Homoscedasticity (constant variance)",
      "Linearity"
    ],
    correctAnswer: 2,
    explanation: "A pattern in residual vs. fitted value plots indicates heteroscedasticity (non-constant variance).",
    chapter: 6
  },
  {
    id: 'stat_30',
    question: 'What is multicollinearity in multiple regression?',
    options: [
      "When the dependent variable is correlated with residuals",
      "When independent variables are highly correlated with each other",
      "When the relationship between variables is non-linear",
      "When there are outliers in the data"
    ],
    correctAnswer: 1,
    explanation: "Multicollinearity occurs when independent variables are highly correlated, making it difficult to isolate their individual effects.",
    chapter: 6
  },

  // Additional Practice Questions
  {
    id: 'stat_31',
    question: 'Which test would you use to compare means between two independent groups?',
    options: [
      "One-sample t-test",
      "Paired t-test",
      "Two-sample t-test",
      "Chi-square test"
    ],
    correctAnswer: 2,
    explanation: "A two-sample t-test is used to compare means between two independent groups.",
    chapter: 7
  },
  {
    id: 'stat_32',
    question: 'What is the purpose of ANOVA?',
    options: [
      "To test for correlation between variables",
      "To compare means across multiple groups",
      "To test for independence in categorical data",
      "To measure the spread of a distribution"
    ],
    correctAnswer: 1,
    explanation: "ANOVA (Analysis of Variance) is used to compare means across three or more groups.",
    chapter: 7
  },
  {
    id: 'stat_33',
    question: 'When would you use a chi-square test?',
    options: [
      "To test relationships between categorical variables",
      "To compare means between groups",
      "To test for normality",
      "To calculate confidence intervals"
    ],
    correctAnswer: 0,
    explanation: "Chi-square tests are used to test relationships or independence between categorical variables.",
    chapter: 7
  },
  {
    id: 'stat_34',
    question: 'What does a box plot display?',
    options: [
      "The exact distribution of data",
      "The five-number summary of data",
      "The correlation between variables",
      "The probability distribution"
    ],
    correctAnswer: 1,
    explanation: "A box plot displays the five-number summary: minimum, Q1, median, Q3, and maximum.",
    chapter: 7
  },
  {
    id: 'stat_35',
    question: 'What is the interquartile range (IQR)?',
    options: [
      "The difference between the maximum and minimum values",
      "The difference between Q3 and Q1",
      "The middle 50% of the data",
      "Both B and C are correct"
    ],
    correctAnswer: 3,
    explanation: "The IQR is the difference between Q3 and Q1, representing the middle 50% of the data.",
    chapter: 7
  }
] 