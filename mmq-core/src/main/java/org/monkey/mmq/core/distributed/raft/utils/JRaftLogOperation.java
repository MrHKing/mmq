/*
 * Copyright 2021-2021 Monkey Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.monkey.mmq.core.distributed.raft.utils;

/**
 * JRaft for additional information on logging operations.
 *
 * @author solley
 */
@SuppressWarnings("PMD.ClassNamingShouldBeCamelRule")
public class JRaftLogOperation {
    
    public static final String MODIFY_OPERATION = "modify";
    
    public static final String READ_OPERATION = "read";
    
}
