@ECHO OFF
CD ..\table-sorting

@REM This command prevents the batch file from carrying on executing the lines below
@REM Change npm run release to "npm run build && ..\\scripts\\build.bat" in package.json
@REM npm run build


@REM Delete current release folder content
DEL /F/Q/S ..\docs\app\*.* > NUL
DEL /F/Q/S ..\docs\*.* > NUL
RMDIR ..\docs\app

@REM Copy Github page files
@REM Github Pages expect the entry point to be index.md or readme.md 
ROBOCOPY ..\github-pages ..\docs\ /MIR /NFL /NDL 
COPY ..\readme.md ..\docs
COPY ..\build\favicon.ico ..\docs


@REM Copy release files
@REM https://stackoverflow.com/a/7487697/9034699
MKDIR ..\docs\app
ROBOCOPY build ..\docs\app /MIR /NFL /NDL 





@REM Push to origin
CD ..
git add *
git commit -m "Released current automated build to Github page"
git push 

@REM Return to original directory
CD .\table-sorting