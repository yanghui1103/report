function validate_formstatictemplatepage1_guid_report2_wxcol_no(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report2_wxcol_age(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isNumeric(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNumeric_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNumeric_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report2_wxcol_salary(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report2_wxcol_birthday(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report2_wxcol_description(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report1_wxcol_no(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report1_wxcol_age(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isNumeric(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNumeric_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNumeric_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report1_wxcol_birthday(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formstatictemplatepage1_guid_report1_wxcol_salary(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editablestatictemplatepage1_guid_report2_wxcol_deptno(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editablestatictemplatepage1_guid_report2_wxcol_builtdate(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editablestatictemplatepage1_guid_report3_wxcol_deptno(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editablestatictemplatepage1_guid_report3_wxcol_builtdate(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editablestatictemplatepage1_guid_report1_wxcol_deptno(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editablestatictemplatepage1_guid_report1_wxcol_builtdate(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report2_wxcol_no(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report2_wxcol_age(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isNumeric(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNumeric_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNumeric_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report2_wxcol_salary(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report2_wxcol_birthday(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report2_wxcol_description(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report1_wxcol_no(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report1_wxcol_age(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isNumeric(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNumeric_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNumeric_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report1_wxcol_birthday(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_formdynamictemplatepage1_guid_report1_wxcol_salary(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editabledynamictemplatepage1_guid_report2_wxcol_deptno(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editabledynamictemplatepage1_guid_report2_wxcol_builtdate(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editabledynamictemplatepage1_guid_report3_wxcol_deptno(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editabledynamictemplatepage1_guid_report3_wxcol_builtdate(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editabledynamictemplatepage1_guid_report1_wxcol_deptno(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isNotEmpty(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isNotEmpty_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isNotEmpty_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}function validate_editabledynamictemplatepage1_guid_report1_wxcol_builtdate(metadataObj,boxMetadataObj,boxValue,boxObj,paramsObj,isOnblur){var errorpromptparamsObj=null;if(boxMetadataObj!=null) errorpromptparamsObj=getObjectByJsonString(boxMetadataObj.getAttribute('errorpromptparamsonblur'));if(!isDate(boxValue,boxObj,paramsObj)){  var errormess=paramsObj.isDate_errormessage;  if(errormess!=null&&errormess!='')  {      errormess=errormess.replace(/#label#/g,paramsObj.inputbox_label);      errormess=errormess.replace(/#data#/g,boxValue);      var tiparamsObj=paramsObj.isDate_tiparams;if(tiparamsObj==null) tiparamsObj=errorpromptparamsObj;      if(errormess!=null&&errormess!='')      {          if(isOnblur===true){wx_jsPromptErrorOnblur(metadataObj,boxObj,errormess,tiparamsObj);}else{wx_warn(errormess);}      }  }  return false;}else{  wx_hideJsPromptErrorOnblur(metadataObj,boxObj);}return true;}