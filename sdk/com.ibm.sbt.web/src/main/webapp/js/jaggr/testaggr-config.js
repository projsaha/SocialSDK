/*
 * (C) Copyright 2012, IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file is AMD Aggregator config for the Aggregator sample application
{
	
	baseUrl: '%{name=baseUrl}',
	
	packages: [
		{
			name: 'dojo',
			location: '%{name=dojoPath}/dojo'
		},
		{
			name: 'dijit',
			location: '%{name=dojoPath}/dijit'
		},
		{
			name: 'dojox',
			location: '%{name=dojoPath}/dojox'
		},
		{
			name: 'sbt',
			location: '%{name=sdkPath}/sbt'
		},
		{
			name: 'sbt/_bridge',
			location: '%{name=sdkPath}/_bridges/dojo-amd'
		},
		{
			name:'sbt/widget',
			location: '%{name=sdkPath}/dojo2'
		},
		{
			name: 'samples',
			location: '%{name=sampleUrl}'
		}
	],
	paths: {
	},
	
	textPluginDelegators: ["js/css"],
	
	deps: ["js/bootstrap"],

	depsIncludeBaseUrl: true,		// include baseUrl in scan for dependencies

	inlinedImageSizeThreshold: 1024,	// max image size to inline in CSS

	//notice: 'embed.txt',

	cacheBust: '${project.version}' // This is a maven variable, replaced at build time (see pom file for filtered resources).
		// You have other options for variable replacement in this file such as "scoped-variables" (see wiki for more info)
}
