cd ..\table-sorting

npm run build

del /F/Q/S ..\docs\*.* > NUL

@REM https://stackoverflow.com/a/7487697/9034699
robocopy build ..\docs /MIR /NFL /NDL 

@REM robocopy ..\readme.md ..\docs /MIR /NFL /NDL 
copy ..\docs\index.html ..\docs\index.md 

