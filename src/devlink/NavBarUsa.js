'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import DropdownLink from './_Builtin/DropdownLink';
import DropdownList from './_Builtin/DropdownList';
import DropdownToggle from './_Builtin/DropdownToggle';
import DropdownWrapper from './_Builtin/DropdownWrapper';
import Icon from './_Builtin/Icon';
import Image from './_Builtin/Image';
import Link from './_Builtin/Link';
import NavbarBrand from './_Builtin/NavbarBrand';
import NavbarButton from './_Builtin/NavbarButton';
import NavbarLink from './_Builtin/NavbarLink';
import NavbarMenu from './_Builtin/NavbarMenu';
import NavbarWrapper from './_Builtin/NavbarWrapper';
import Paragraph from './_Builtin/Paragraph';
import Span from './_Builtin/Span';
import * as _interactions from './interactions';

const _interactionsData = JSON.parse(
  '{"events":{"e-3620":{"id":"e-3620","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-262","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4470"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68ca7f87-b74c-c71b-ec24-9816d07335a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68ca7f87-b74c-c71b-ec24-9816d07335a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721835688769},"e-3621":{"id":"e-3621","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4465"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68ca7f87-b74c-c71b-ec24-9816d07335a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68ca7f87-b74c-c71b-ec24-9816d07335a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721835688769},"e-6054":{"id":"e-6054","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-915","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6055"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67d97f8754a06d9589351d1b|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67d97f8754a06d9589351d1b|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730816710160},"e-6055":{"id":"e-6055","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-916","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6054"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67d97f8754a06d9589351d1b|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67d97f8754a06d9589351d1b|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730816710160},"e-6627":{"id":"e-6627","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-915","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6628"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6811101c5ba15d6727782a6d|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6811101c5ba15d6727782a6d|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745948701877},"e-6628":{"id":"e-6628","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-916","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6627"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6811101c5ba15d6727782a6d|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6811101c5ba15d6727782a6d|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745948701877},"e-6631":{"id":"e-6631","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-915","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6632"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6821abb1b7cae99634e37839|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6821abb1b7cae99634e37839|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747037106501},"e-6632":{"id":"e-6632","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-916","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6631"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6821abb1b7cae99634e37839|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6821abb1b7cae99634e37839|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747037106501},"e-6805":{"id":"e-6805","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-947","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6900"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".f-dropdown-4","originalId":"63226e0878e70198b1448dd7|78bd4205-904e-c5f9-435b-95105151720d","appliesTo":"CLASS"},"targets":[{"selector":".f-dropdown-4","originalId":"63226e0878e70198b1448dd7|78bd4205-904e-c5f9-435b-95105151720d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1645840154469},"e-6806":{"id":"e-6806","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-948","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6899"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".f-dropdown-4","originalId":"63226e0878e70198b1448dd7|78bd4205-904e-c5f9-435b-95105151720d","appliesTo":"CLASS"},"targets":[{"selector":".f-dropdown-4","originalId":"63226e0878e70198b1448dd7|78bd4205-904e-c5f9-435b-95105151720d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1645840154470},"e-6919":{"id":"e-6919","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-915","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6920"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"684c3dc3f5ee8a9132f2deae|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"684c3dc3f5ee8a9132f2deae|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749827012220},"e-6920":{"id":"e-6920","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-916","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6919"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"684c3dc3f5ee8a9132f2deae|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"684c3dc3f5ee8a9132f2deae|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749827012220},"e-7017":{"id":"e-7017","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-963","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7817"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9b384f8a-3335-7481-60b5-30580ad331a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9b384f8a-3335-7481-60b5-30580ad331a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752938367787},"e-7018":{"id":"e-7018","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-964","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7816"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9b384f8a-3335-7481-60b5-30580ad331a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9b384f8a-3335-7481-60b5-30580ad331a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752938367808},"e-7191":{"id":"e-7191","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-915","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68cd4c703f86adf32435b285|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68cd4c703f86adf32435b285|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758284913427},"e-7192":{"id":"e-7192","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-916","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7191"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68cd4c703f86adf32435b285|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68cd4c703f86adf32435b285|8ab741a5-3e08-0981-28f4-4f06d54d7283","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758284913427},"e-7273":{"id":"e-7273","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-915","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68e62e8dbea179a901b6ff42|b458c056-1417-0c0a-ddf5-b3f52bee3da8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e62e8dbea179a901b6ff42|b458c056-1417-0c0a-ddf5-b3f52bee3da8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759915672091},"e-7274":{"id":"e-7274","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-916","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68e62e8dbea179a901b6ff42|b458c056-1417-0c0a-ddf5-b3f52bee3da8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e62e8dbea179a901b6ff42|b458c056-1417-0c0a-ddf5-b3f52bee3da8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759915672091},"e-7916":{"id":"e-7916","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1056","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7917"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"699d5c6a66e09a305160fd2a|141140d5-0ae4-42bb-d55a-13894335c59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"699d5c6a66e09a305160fd2a|141140d5-0ae4-42bb-d55a-13894335c59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1772176503223},"e-7917":{"id":"e-7917","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1057","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7916"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"699d5c6a66e09a305160fd2a|141140d5-0ae4-42bb-d55a-13894335c59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"699d5c6a66e09a305160fd2a|141140d5-0ae4-42bb-d55a-13894335c59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1772176503223}},"actionLists":{"a-262":{"id":"a-262","title":"Square Menu with Links Open","actionItemGroups":[{"actionItems":[{"id":"a-262-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-1.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd129","517e27f7-fd5f-dff1-7519-fbe92c4fd133"]},"yValue":0.625,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-262-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-1.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd129","517e27f7-fd5f-dff1-7519-fbe92c4fd133"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-262-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-2.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd128","517e27f7-fd5f-dff1-7519-fbe92c4fd132"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-262-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-3.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd127","517e27f7-fd5f-dff1-7519-fbe92c4fd131"]},"yValue":-0.625,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-262-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-3.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd127","517e27f7-fd5f-dff1-7519-fbe92c4fd131"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-262-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-simple-menu-button","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd12a"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-262-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-3.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd127","517e27f7-fd5f-dff1-7519-fbe92c4fd131"]},"widthValue":1.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664852296627},"a-263":{"id":"a-263","title":"Square Menu with Links Close","actionItemGroups":[{"actionItems":[{"id":"a-263-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-1.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd129","517e27f7-fd5f-dff1-7519-fbe92c4fd133"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-263-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-1.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd129","517e27f7-fd5f-dff1-7519-fbe92c4fd133"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-263-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-2.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd128","517e27f7-fd5f-dff1-7519-fbe92c4fd132"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-263-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-3.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd127","517e27f7-fd5f-dff1-7519-fbe92c4fd131"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-263-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-3.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd127","517e27f7-fd5f-dff1-7519-fbe92c4fd131"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-263-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-simple-menu-button","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd12a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-263-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-line-3.spark-simple-line","selectorGuids":["517e27f7-fd5f-dff1-7519-fbe92c4fd127","517e27f7-fd5f-dff1-7519-fbe92c4fd131"]},"widthValue":0.796875,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664852296627},"a-915":{"id":"a-915","title":"Square Menu with Links Open 12","actionItemGroups":[{"actionItems":[{"id":"a-915-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"yValue":0.625,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-915-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-915-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"xValue":0,"yValue":0,"locked":true}},{"id":"a-915-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"yValue":-0.625,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-915-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-915-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-simple-menu-button-6","selectorGuids":["bf794106-0d2b-fdd6-c348-c300522fa86b"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-915-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"widthValue":1.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664852296627},"a-916":{"id":"a-916","title":"Square Menu with Links Close 12","actionItemGroups":[{"actionItems":[{"id":"a-916-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-916-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-916-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"xValue":1,"yValue":1,"locked":true}},{"id":"a-916-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-916-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-916-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".spark-simple-menu-button-6","selectorGuids":["bf794106-0d2b-fdd6-c348-c300522fa86b"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-916-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{},"widthValue":0.796875,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664852296627},"a-947":{"id":"a-947","title":"Dropdown / OPEN 🟢 4","actionItemGroups":[{"actionItems":[{"id":"a-947-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".f-dropdown-icon-l","selectorGuids":["9f428b5f-d624-8204-1b22-3284853e4a09"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-947-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".f-dropdown-icon-l","selectorGuids":["9f428b5f-d624-8204-1b22-3284853e4a09"]},"globalSwatchId":"2d1581e5","rValue":100,"bValue":255,"gValue":46,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1645840161064},"a-948":{"id":"a-948","title":"Dropdown / CLOSE 🔴 4","actionItemGroups":[{"actionItems":[{"id":"a-948-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".f-dropdown-icon-l","selectorGuids":["9f428b5f-d624-8204-1b22-3284853e4a09"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-948-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".f-dropdown-icon-l","selectorGuids":["9f428b5f-d624-8204-1b22-3284853e4a09"]},"globalSwatchId":"2268f126","rValue":107,"bValue":148,"gValue":112,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1645840161064},"a-963":{"id":"a-963","title":"dropdown-open","actionItemGroups":[{"actionItems":[{"id":"a-963-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown","selectorGuids":["c250ee84-9ecd-b3f3-c640-156de893155c"]},"value":"none"}}]},{"actionItems":[{"id":"a-963-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown","selectorGuids":["c250ee84-9ecd-b3f3-c640-156de893155c"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1752938385722},"a-964":{"id":"a-964","title":"dropdown-open 6","actionItemGroups":[{"actionItems":[{"id":"a-964-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown","selectorGuids":["c250ee84-9ecd-b3f3-c640-156de893155c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1752938385722},"a-1056":{"id":"a-1056","title":"dropdown-open 7","actionItemGroups":[{"actionItems":[{"id":"a-1056-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown","selectorGuids":["c250ee84-9ecd-b3f3-c640-156de893155c"]},"value":"none"}}]},{"actionItems":[{"id":"a-1056-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown","selectorGuids":["c250ee84-9ecd-b3f3-c640-156de893155c"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1752938385722},"a-1057":{"id":"a-1057","title":"dropdown-open 8","actionItemGroups":[{"actionItems":[{"id":"a-1057-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown","selectorGuids":["c250ee84-9ecd-b3f3-c640-156de893155c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1752938385722}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavBarUsa({ as: _Component = NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, 'mm-nav-bar-copy')}
      config={{
        animation: 'default',
        easing: 'ease',
        easing2: 'ease',
        duration: 400,
        docHeight: false,
        collapse: 'medium',
        noScroll: false,
      }}
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-w-id="68ca7f87-b74c-c71b-ec24-9816d07335a2"
      tag="div"
    >
      <Block
        className={_utils.cx(_styles, 'spark-square-menu-inner-7')}
        tag="div"
      >
        <NavbarBrand
          className={_utils.cx(_styles, 'spark-brand-logo')}
          options={{
            href: '#',
          }}
        >
          <Image
            alt=""
            className={_utils.cx(_styles, 'image-80')}
            height="23"
            loading="lazy"
            src="https://uploads-ssl.webflow.com/660d0c07422cfeca80d26d7d/6626114f2c2dbd34ed07beb4_Text%20logo_website%20blue2.webp"
            width="auto"
          />
        </NavbarBrand>
        <NavbarBrand
          className={_utils.cx(_styles, 'spark-brand-logo', 'hide')}
          options={{
            href: '#',
          }}
        >
          <Image
            alt=""
            className={_utils.cx(_styles, 'image-90')}
            height="23"
            loading="eager"
            src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/68d12b4bd28f4c19e86a23f7_logo.webp"
            width="auto"
          />
        </NavbarBrand>
        <NavbarMenu
          className={_utils.cx(_styles, 'uui-navbar01_menu-2')}
          role="navigation"
          tag="nav"
        >
          <Block
            className={_utils.cx(_styles, 'uui-navbar01_menu-left-2')}
            tag="div"
          >
            <NavbarLink
              className={_utils.cx(_styles, 'spark-nav-link---our-tutor-2')}
              options={{
                href: '#',
              }}
            >
              {'Our Tutors'}
            </NavbarLink>
            <NavbarLink
              className={_utils.cx(_styles, 'spark-nav-link---our-tutor-2')}
              options={{
                href: '#',
              }}
            >
              {'How it works'}
            </NavbarLink>
            <NavbarLink
              className={_utils.cx(_styles, 'spark-nav-link---our-tutor-2')}
              options={{
                href: '#',
              }}
            >
              {'Pricing'}
            </NavbarLink>
            <NavbarLink
              className={_utils.cx(_styles, 'spark-nav-link---our-tutor-2')}
              options={{
                href: '#',
              }}
            >
              {'Blogs'}
            </NavbarLink>
            <NavbarLink
              className={_utils.cx(_styles, 'spark-nav-link-ot-3')}
              options={{
                href: '#',
              }}
            >
              {'Our Tutors'}
            </NavbarLink>
            <DropdownWrapper
              className={_utils.cx(_styles, 'dropdown')}
              data-w-id="9b384f8a-3335-7481-60b5-30580ad331a4"
              delay={0}
              hover={false}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, 'dropdown-toggle-3')}
                tag="div"
              >
                <Block tag="div">{'Programs'}</Block>
                <Icon
                  className={_utils.cx(_styles, 'icon-17')}
                  widget={{
                    type: 'icon',
                    icon: 'dropdown-toggle',
                  }}
                />
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, 'nav-dropdown')}
                tag="nav"
              >
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  {'Math Tutoring'}
                </DropdownLink>
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  {'Science Tutoring'}
                </DropdownLink>
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  {'ELATutoring'}
                </DropdownLink>
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  {'SAT Program'}
                </DropdownLink>
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  {'Public Speaking'}
                </DropdownLink>
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  {'Math Catch-Up'}
                </DropdownLink>
                <DropdownLink
                  className={_utils.cx(_styles, 'nav-links')}
                  options={{
                    href: '#',
                  }}
                >
                  <Span className={_utils.cx(_styles, 'eraya-color')}>
                    {'ERAYA'}
                  </Span>
                  <Span className={_utils.cx(_styles, 'eraya-color')}>
                    {' (IBDP)'}
                  </Span>
                </DropdownLink>
              </DropdownList>
            </DropdownWrapper>
          </Block>
          <Block
            className={_utils.cx(_styles, 'uui-navbar01_menu-right')}
            tag="div"
          >
            <Link
              block="inline"
              button={false}
              className={_utils.cx(
                _styles,
                'uui-button-secondary-gray-22',
                'show-tablet'
              )}
              options={{
                href: 'https://mentormatch.wise.live/login',
                target: '_blank',
              }}
            >
              <Block
                className={_utils.cx(_styles, 'icon-call-sticky')}
                tag="div"
              >
                <Paragraph
                  className={_utils.cx(_styles, 'paragraph-regular---call')}
                >
                  {'Login'}
                </Paragraph>
              </Block>
            </Link>
            <NavbarLink
              className={_utils.cx(
                _styles,
                'spark-nav-link-6',
                'spark-button',
                'js-book-free-trial'
              )}
              options={{
                href: '#',
              }}
            >
              {'Book a Free Trial'}
            </NavbarLink>
            <DropdownWrapper
              className={_utils.cx(_styles, 'f-dropdown_w')}
              delay="0"
              hover={false}
              tag="div"
            >
              <DropdownToggle
                className={_utils.cx(_styles, 'f-dropdown-toggle_wr')}
                tag="div"
              >
                <Image
                  alt="United States"
                  className={_utils.cx(_styles, 'f-avatar-image_v2')}
                  height="auto"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/65ac10a2508e35dff8fd7212_us.svg"
                  width="auto"
                />
                <Block
                  className={_utils.cx(_styles, 'f-paragraph-small-2_e')}
                  tag="div"
                >
                  {'English'}
                </Block>
                <Icon
                  className={_utils.cx(_styles, 'f-dropdown-icon-l')}
                  widget={{
                    type: 'icon',
                    icon: 'dropdown-toggle',
                  }}
                />
              </DropdownToggle>
              <DropdownList
                className={_utils.cx(_styles, 'f-dropdown-list')}
                tag="nav"
              >
                <Block
                  className={_utils.cx(_styles, 'f-dropdown-wrap')}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, 'f-dropdown-link')}
                    options={{
                      href: '#',
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, 'f-dropdown-avatar')}
                      tag="div"
                    >
                      <Image
                        alt="United States"
                        className={_utils.cx(_styles, 'f-avatar-image-2')}
                        height="auto"
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/65ac10a2508e35dff8fd7212_us.svg"
                        width="auto"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'f-paragraph-small-2_e')}
                      tag="div"
                    >
                      {'English'}
                    </Block>
                  </Link>
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, 'f-dropdown-link')}
                    options={{
                      href: '#',
                    }}
                  >
                    <Block
                      className={_utils.cx(_styles, 'f-dropdown-avatar')}
                      tag="div"
                    >
                      <Image
                        alt=""
                        className={_utils.cx(_styles, 'f-avatar-image-2')}
                        height="auto"
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/64cf94fd7e411be306ef80cf_Flag_of_the_United_Arab_Emirates.svg"
                        width="auto"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'f-paragraph-small-2_a')}
                      tag="div"
                    >
                      {'العربية'}
                    </Block>
                  </Link>
                </Block>
              </DropdownList>
            </DropdownWrapper>
          </Block>
        </NavbarMenu>
        <NavbarButton
          className={_utils.cx(_styles, 'spark-simple-menu-button-6')}
          data-ix="simple-menu-button"
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, 'spark-line-14', 'spark-simple-line')}
            tag="div"
          />
          <Block
            className={_utils.cx(_styles, 'spark-line-13', 'spark-simple-line')}
            tag="div"
          />
          <Block
            className={_utils.cx(_styles, 'spark-line-15', 'spark-simple-line')}
            tag="div"
          />
        </NavbarButton>
      </Block>
    </_Component>
  );
}
