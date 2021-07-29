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

package org.monkey.mmq.core.consistency;

import org.monkey.mmq.core.consistency.model.RestResult;
import org.monkey.mmq.core.consistency.model.RestResultUtils;

import java.util.Map;

/**
 * Operation and maintenance command interface.
 *
 * @author solley
 */
public interface CommandOperations {
    
    /**
     * Operation and maintenance interface operation entry.
     *
     * @param commands commands
     * @return execute success
     */
    default RestResult<String> execute(Map<String, String> commands) {
        return RestResultUtils.success();
    }
    
}
