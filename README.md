# jqueryguant-CN
基于Jquery 甘特图原版汉化以及简单美化

看到有些同学在反映有BUG，但是具体也没说明啥BUG，个人觉得是Gantt对象初始化的参数对象project一些默认参数没给（官方原版本没进行判断，没给默认参数就会把这部分参数读取为undefined），导致部分按扭不出来，project里把这些默认配置加上就可以解决，更建议修改ganttMaster.js的以下部分原（line:444）)，增加默认值：

  this.permissions.canWrite = project.canWrite;
  this.permissions.canAdd = project.canAdd;
  this.permissions.canWriteOnParent = project.canWriteOnParent;
  this.permissions.cannotCloseTaskIfIssueOpen = project.cannotCloseTaskIfIssueOpen;
  this.permissions.canAddIssue = project.canAddIssue;
  this.permissions.canDelete = project.canDelete;
修改为：

  ({
	canWriteOnParent:this.permissions.canWriteOnParent=true,
	canWrite:this.permissions.canWrite=true,
    canAdd:this.permissions.canAdd =true,
	canDelete:this.permissions.canDelete =true,
	canInOutdent:this.permissions.canInOutdent =true,
	canMoveUpDown:this.permissions.canMoveUpDown =true,
	canSeePopEdit:this.permissions.canSeePopEdit =true,
	canSeeFullEdit:this.permissions.canSeeFullEdit =true,
	canSeeDep:this.permissions.canSeeDep =true,
	canSeeCriticalPath:this.permissions.canSeeCriticalPath =true,
	canAddIssue:this.permissions.canAddIssue =false,
	cannotCloseTaskIfIssueOpen:this.permissions.cannotCloseTaskIfIssueOpen =true
	}=project);


csdn：https://blog.csdn.net/mfkarj/article/details/80310305
