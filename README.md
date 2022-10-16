# App Purpose
This app sets the time based on the timezone provided in the specified format indicated in it.

## Instructions On How To Use App
First of all, the app has a default target timezone(targetTimezone) and a default target format(targetFormat) set.
![Screenshot (244)](https://user-images.githubusercontent.com/102755255/196053263-622359ff-8c0f-4275-bf31-907556b79881.png)

Now, with these default values provided, we use the yargs to set the command and parameters to set the time of the default timezone. 'yargs' is package in node that helps to work with properties of a value in the commandline.
![Screenshot (246)](https://user-images.githubusercontent.com/102755255/196053493-458f6ce2-7f16-400e-8f3d-715b1147cb09.png)

After the above is done, we now use the command and parameter to set the time based on the command what will be provided in the command line by the user.
![Screenshot (247)](https://user-images.githubusercontent.com/102755255/196053678-c05e665a-90b0-47f0-b6fb-aa86c81a2987.png)

Example of how this work
![Screenshot (248)](https://user-images.githubusercontent.com/102755255/196053728-a3cd02ea-2c25-47a9-8560-176e37fb2822.png)
In this screenshot, I passed in my command in the command line " node tz 'timezone' -- targetFormat" and the time was set to "The time at the Asia/Kolkata timezone is 2022-10-17T00:28:31+05:30". This means that my command in the command line met the third condition in the conditions that were provided in the app. If I had passed a different command aside this, it would have given me a different response based on the condition it meets with in the app.

### Conclusion
This app uses a dependency called moment which makes it possible for the app to set the right time at every given time and timezone.

