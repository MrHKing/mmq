// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Data.proto

package org.monkey.mmq.core.entity;

public interface LogOrBuilder extends
    // @@protoc_insertion_point(interface_extends:Log)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string group = 1;</code>
   */
  java.lang.String getGroup();
  /**
   * <code>string group = 1;</code>
   */
  com.google.protobuf.ByteString
      getGroupBytes();

  /**
   * <code>string key = 2;</code>
   */
  java.lang.String getKey();
  /**
   * <code>string key = 2;</code>
   */
  com.google.protobuf.ByteString
      getKeyBytes();

  /**
   * <code>bytes data = 3;</code>
   */
  com.google.protobuf.ByteString getData();

  /**
   * <code>string type = 4;</code>
   */
  java.lang.String getType();
  /**
   * <code>string type = 4;</code>
   */
  com.google.protobuf.ByteString
      getTypeBytes();

  /**
   * <code>string operation = 5;</code>
   */
  java.lang.String getOperation();
  /**
   * <code>string operation = 5;</code>
   */
  com.google.protobuf.ByteString
      getOperationBytes();

  /**
   * <code>map&lt;string, string&gt; extendInfo = 6;</code>
   */
  int getExtendInfoCount();
  /**
   * <code>map&lt;string, string&gt; extendInfo = 6;</code>
   */
  boolean containsExtendInfo(
      java.lang.String key);
  /**
   * Use {@link #getExtendInfoMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getExtendInfo();
  /**
   * <code>map&lt;string, string&gt; extendInfo = 6;</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getExtendInfoMap();
  /**
   * <code>map&lt;string, string&gt; extendInfo = 6;</code>
   */

  java.lang.String getExtendInfoOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; extendInfo = 6;</code>
   */

  java.lang.String getExtendInfoOrThrow(
      java.lang.String key);
}
