/*
 * � Copyright IBM Corp. 2012
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
 * implied. See the License for the specific language governing 
 * permissions and limitations under the License.
 */
/**
 * Social Business Toolkit SDK.
 * Definition of constants for CommunityService.
 */
define(["sbt/config", "sbt/connections/core"],function(sbt) {
	return sbt.connections.communityConstants = {
		_methodName : {
			"createCommunity" : "createCommunity",
			"updateCommunity" : "updateCommunity",
			"deleteCommunity" : "deleteCommunity",
			"addMember"		  : "addMember",
			"removeMember"    : "removeMember",
			"getCommunity"    : "getCommunity",
			"getMember"		  : "getMember"
		},
		sbtErrorCodes:{
			badRequest         :400
		},
		sbtErrorMessages:{
			null_communityId        :"Undefined community Id",
			null_memberId        	:"Undefined member Id",
			null_community			:"Undefined community",
			args_object				:"Invalid argument",
			args_member				:"Invalid member",
			args_community			:"Invalid community"
		},
		_xpath : {
				"entry"				:"/a:entry",
				"communityUuid"		:"snx:communityUuid",
				"title"				:"a:title",
				"summary"			:"a:summary[@type='text']",
				"communityUrl"		:"a:link[@rel='self']/@href",
				"logoUrl"			:"a:link[@rel='http://www.ibm.com/xmlns/prod/sn/logo']/@href",
				"tags"				:"a:category/@term",
				"content"			:"a:content[@type='html']",
                "memberCount"       :"snx:membercount",
                "communityType"     :"snx:communityType",
                "published"         :"a:published",
                "updated"           :"a:updated",
                "authorUid"			:"a:author/snx:userid",
                "authorName"		:"a:author/a:name",
                "authorEmail"		:"a:author/a:email",
    			"contributorUid"	:"a:contributor/snx:userid",
    			"contributorName"	:"a:contributor/a:name",
    			"contributorEmail"	:"a:contributor/a:email"
		},
		_xpath_member : {
			"entry"				:"/a:entry",
			"name"				:"a:contributor/a:name",
			"uid"				:"a:contributor/snx:userid",
			"email"             :"a:contributor/a:email",
			"role"				:"snx:role"
		},
		_xpath_communities_Feed : {
				"entry"				:"/a:feed/a:entry",
                "totalResults"      :"/a:feed/opensearch:totalResults",
                "startIndex"        :"/a:feed/opensearch:startIndex",
                "itemsPerPage"      :"/a:feed/opensearch:itemsPerPage",
				"id"				:"snx:communityUuid",
				"title"				:"a:title",
                "communityUuid"     :"snx:communityUuid",
                "summary"           :"a:summary[@type='text']",
                "communityUrl"      :"a:link[@rel='self']/@href",
                "logoUrl"           :"a:link[@rel='http://www.ibm.com/xmlns/prod/sn/logo']/@href",
                "tags"              :"a:category/@term",
                "content"           :"a:content[@type='html']",        
                "memberCount"       :"snx:membercount",
                "communityType"     :"snx:communityType",
                "published"         :"a:published",
                "updated"           :"a:updated"
		},
		_xpath_community_Members_Feed : {
				"entry"				:"/a:feed/a:entry",
                "totalResults"      :"/a:feed/opensearch:totalResults",
                "startIndex"        :"/a:feed/opensearch:startIndex",
                "itemsPerPage"      :"/a:feed/opensearch:itemsPerPage",
				"id"				:"a:contributor/snx:userid",
				"name"				:"a:contributor/a:name"
		},
		communityServiceEntity : {
				"communities"	:"/communities",
				"community"		:"/community"
		},		
		communitiesType : {
				"members"				:"/members",
				"subCommunities"		:"",
				"bookmarks"				:"",
				"invitees"				:"",
				"public"				:"/all",
				"my"					:"/my"
		},
		entityServiceBaseUrl	: "/communities/service/atom",
		serviceEntity : {
			"communities"	:"/communities",
			"community"		:"/community"
		},
		entityType : {
			"members"				:"/members",
			"subCommunities"		:"",
			"bookmarks"				:"",
			"invitees"				:"",
			"public"				:"/all",
			"my"					:"/my",
			"instance"				:"/instance"
		},
		xpath_community : {
			"entry"				:"/a:entry",
			"communityUuid"		:"snx:communityUuid",
			"uid"				:"snx:communityUuid",
			"title"				:"a:title",
			"summary"			:"a:summary[@type='text']",
			"communityUrl"      :"a:link[@rel='alternate']/@href",
			"communityFeedUrl"  :"a:link[@rel='self']/@href",
			"logoUrl"			:"a:link[@rel='http://www.ibm.com/xmlns/prod/sn/logo']/@href",
			"tags"				:"a:category/@term",
			"content"			:"a:content[@type='html']",
            "memberCount"       :"snx:membercount",
            "communityType"     :"snx:communityType",
            "published"         :"a:published",
            "updated"           :"a:updated",
            "authorUid"			:"a:author/snx:userid",
            "authorName"		:"a:author/a:name",
            "authorEmail"		:"a:author/a:email",
			"contributorUid"	:"a:contributor/snx:userid",
			"contributorName"	:"a:contributor/a:name",
			"contributorEmail"	:"a:contributor/a:email"				
		},
		xpath_feed_community : {
			"entry"				:"/a:feed/a:entry",	
			"id"				:"a:id",
			"totalResults"      :"/a:feed/opensearch:totalResults",
            "startIndex"        :"/a:feed/opensearch:startIndex",
            "itemsPerPage"      :"/a:feed/opensearch:itemsPerPage",
            "title"				:"a:title"            
		},
		xpath_member : {
			"entry"				:"/a:entry",				
			"name"				:"a:contributor/a:name",
			"uid"				:"a:contributor/snx:userid",
			"role"				:"snx:role"
		},
		xpath_feed_member : {
			"entry"				:"/a:feed/a:entry",
			"id"				:"a:contributor/snx:userid",
			"uid"				:"a:contributor/snx:userid",
			"totalResults"      :"/a:feed/opensearch:totalResults",
            "startIndex"        :"/a:feed/opensearch:startIndex",
            "itemsPerPage"      :"/a:feed/opensearch:itemsPerPage"
		}
	};
});